import React from 'react'
import { Link } from "react-router-dom";
import Button from "./Button"
import Header from './Header';
import { useContext } from 'react'
import { HeaderContext } from '../helpers/HeaderContext'

const UsersList = ({usersData}) => {
    // console.log(usersData)
    const {setHeadTitle} = useContext(HeaderContext)

    return (
        <>
        {/* <Header title="List of Users"/> */}
        {setHeadTitle("List of Users")}

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
        </>
    )
}

export default UsersList
