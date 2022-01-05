import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div>
            <div className="header">
            <Link to='/' style={{textDecoration: 'none', color: 'Red'}}>
                    <div className="logo">
                        ZOMATO
                    </div>
			</Link>
                    
            <div className="header-buttons">
                <div className="btn btn-success login-button">Login</div>
                <div className="btn btn-warning register-button">Register</div>
            </div> 
            </div>
        </div>
    )
}

export default Header
