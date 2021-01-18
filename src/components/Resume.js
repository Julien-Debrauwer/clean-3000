import React, { useState, useSelector } from 'react'
import Header from './Header'

const Resume = () => {
    // const customers = useSelector(state => this.state.customers);
    // console.log(state);

    return (
        <div>
            <Header/>
            <main>
            <div className="container">
                <p>Résumé de l'intervention</p>
            </div>
            </main>
        </div>
    )
}

export default Resume
