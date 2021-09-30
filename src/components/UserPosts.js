import React , {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import Error404 from "./Error404"
import Button from "./Button"
import PostsList from './PostsList';
import Header from './Header'



const UserPosts = ({usersData}) => {

    const {userId} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    const user = usersData.find((user) => (user.id == userId))
    // console.log("user"+user);
	useEffect(() => {

		const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
		async function getUserPosts() {
			try {
			var response = await fetch(url) ;
			var json = await response.json();
			console.log("userposts" + json);
        
			setUserPosts(json)
			}
            catch (error) {
                console.log("error", error);
            }
		};

		getUserPosts();

	},[])
    
    return (
        <>
        <Header title={`Posts by: @${user.username}`}/>

        <div>
            <PostsList posts={userPosts}/>
        </div>
        </>
    )
}

export default UserPosts
