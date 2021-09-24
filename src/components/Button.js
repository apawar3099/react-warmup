import React from 'react'

const Button = ({value}) => {
    return (
        <div className="button-div">
            <button className="btn btn-outline-primary" >{value}</button>
        </div>
    )
}

export default Button
