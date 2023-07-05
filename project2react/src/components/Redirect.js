import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Redirect = ({...props}) => {
    const location = useLocation();
    return (
        <>
            <h1>404</h1>
            <h2>{location.state.message}</h2>
            <h3>
                <Link to='/'>
                    Home
                </Link>
            </h3>
        </>
    )
}

export default Redirect;