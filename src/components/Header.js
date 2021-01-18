import React from 'react';

const Header = ({ history, isHome = false }) => {
    
    const goToHome = () => {
        history.push(`/`);
    }
    
    return (
        <header className="App-header">
            { !isHome ? <button className="back-button" onClick={() => goToHome()} >Retour</button> : "" }
            <div className="title-wrapper">
                <h1>Clean 3000</h1>
            </div>
        </header>
    )
}

export default Header
