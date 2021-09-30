import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Homepage = () => {
    return (
        <div className="text-center">
            <Header title="My JSON APP"/>
            
            <p>Welcome to my app...created with &#10084;&#65039; and PlaceHolder API</p>
            <div>
                <Link to={"/users"}>View Users</Link>
            </div>
        </div>
    )
}

export default Homepage
