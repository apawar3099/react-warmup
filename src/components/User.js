
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Error404 from "./Error404"
import Button from "./Button"
import Header from './Header'
import { getUsersById } from "../service/fetchUser";
import { useContext } from 'react'
import { HeaderContext } from '../helpers/HeaderContext'

const User = ({usersData}) => {
    
    const [singleUser, setSingleUser] = useState({});
    const {id} = useParams();
    const {setHeadTitle} = useContext(HeaderContext)

    useEffect(() => {
        async function fetchuser() {
            const user = await getUsersById(id);
            setSingleUser(user);
        }

        fetchuser();
    },[])
    // const singleUser = usersData.find((user) => user.id== id)
    
    // console.log("userpage" + usersData[0].name);

    if(!singleUser) return <Error404 />

    return (
        <>
        {/* <Header title="User Page"/> */}
        {setHeadTitle("User Page")}

        <div className="text-center">
            <h3>@{singleUser.username}</h3>
            <h5>{singleUser.name}</h5>
            <p>User ID : {singleUser.id}</p>
            <p>Email : {singleUser.email}</p>
            <p>phone No. : {singleUser.phone}</p>

            <Link to={"/posts/"+ singleUser.id} >
                <Button value= "View Posts"  />
            </Link>

            <Link to={"/albums/"+ singleUser.id} >
                <Button value= "View Albums"  />
            </Link>
        </div>
        </>
    )
}

export default User
