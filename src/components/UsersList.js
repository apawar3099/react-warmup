import React from 'react'
import { Link } from "react-router-dom";
import Button from "./Button"



const UsersList = ({usersData}) => {
    console.log(usersData)
    
    return (
        <div className= "wrapper">
            
            {usersData.map((user, index) =>{
                return (
                <div key={index} className="box">
                    <h6>#{user.id}</h6>
                    <h3>@{user.username}</h3>
                    <h5>{user.name}</h5>

                    <Link  to={`/user/${user.id}`}>
                        <Button value= "View user"  />
                    </Link>
                </div>
            )} )}
        </div>
    )
}

export default UsersList
