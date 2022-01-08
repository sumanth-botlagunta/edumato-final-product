import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import Button from '@mui/material/Button';

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
                
                    <Button variant="contained" color="success" className='button login login-button' >Login</Button>
                
                    <Button variant="contained" className="button register register-button">Register</Button>
               
            </div> 
            </div>
        </div>
    )
}

export default Header
