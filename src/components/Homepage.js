import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="text-center">
            <h1>My JSON APP</h1>
            <p>Welcome to my app...created with love and PlaceHolder API</p>
            <div>
                <Link to={"/users"}>View Users</Link>
            </div>
        </div>
    )
}

export default Homepage
