
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import Error404 from "./Error404"
import Header from './Header'
import { useContext } from 'react'
import { HeaderContext } from '../helpers/HeaderContext'
import { getAllPosts, getAllUsers, getPostsById, getUsersById } from "../service/fetchData";


const PostPage = () => {
    const {postId} = useParams()
    const {setHeadTitle} = useContext(HeaderContext)

    const [post, setPost] = useState({})
    const [user, setUser] = useState({})
    // const post = posts.find((post) => post.id== postId)
    // console.log(post)
    // const user = usersData.find((user) => (user.id == post.userId))


    useEffect(()=> {

        async function getDataFunc(postId){
            try {
            var post = await getPostsById(postId)
            var user = await getUsersById(post.userId)
            setPost(post)
            setUser(user)
            } catch (error) {
                
            }
        }
        
        getDataFunc(postId)

    },[])

    if(!post) return <Error404 />

    return (
        <>
        {/* <Header title="Post Page"/> */}
        {setHeadTitle("Post Page")}

        <div>
            <div className="post text-center card">
                <h3 className="card-header">{post.title}</h3>
                
                <div className="card-body post">
                    <h6 className = "card-subtitle mb-2 " >Posted by @{user.username}</h6>
                    <p className="card-text">{post.body}</p>
                </div> 
            </div>
            <hr></hr>
            <div>
                <h4 style={{color:"red"}} className="mb-3 text-center" >Comments</h4>
                <Comments postId = {postId}/>
            </div>
            
        </div>
        </>
    )
}

export default PostPage
