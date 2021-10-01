import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { useContext } from 'react'
import { HeaderContext } from '../helpers/HeaderContext'

const Homepage = () => {
    const {setHeadTitle} = useContext(HeaderContext)

    return (
        <div className="text-center">
            {setHeadTitle("Home Page")}
            <p>Welcome to my app...created with &#10084;&#65039; and PlaceHolder API</p>
            <div>
                <Link to={"/users"}>View Users</Link>
            </div>
        </div>
    )
}

export default Homepage
