import React from 'react';
import { Link } from 'react-router-dom'
const Header = ({ history, isHome = false }) => {
    
    const goToHome = () => {
        history.push(`/`);
    }
    
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/">
                        <img className="logo" src={`${process.env.PUBLIC_URL}/img/logo-clean3000-transparent.png`} alt="Logo de Clean 3000" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
