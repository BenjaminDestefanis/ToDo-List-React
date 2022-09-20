import React from "react";
import './Logo.css'

import logoIcon from '../Images/logo.png' 

const Logo = () => {
    return (
        <div className="logo-container">
            <h1>TODO APP con React.js</h1>

            <img 
                className="logo"
                src={logoIcon}
                alt="img-logo"
            />
        </div>

    )
}

export default Logo;