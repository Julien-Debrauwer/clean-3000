import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'antd'
import Header from './Header'
import { Button } from './Button'
import { addVisit } from '../actions';

const NewCard = (props) => {
    const [name, setName] = useState("")
    const [obs, setObs] = useState("")
    
    const dispatch = useDispatch()

    const AddCardAction = (name, obs) => {
        // console.log(name, obs);
        // dispatch(checkName(name))
        dispatch(addVisit(name, obs))
        props.history.push('resume')
    }


    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <Row gutter={[24, 24]} justify="space-between" >
                        <Col xs={24} md={12}>
                            <div className="card-group">
                                <label htmlFor="name">Entrer le nom du client ou de l'entreprise</label>
                                <input 
                                    name="name"
                                    className="input input__add" 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="card-group">
                                <label htmlFor="obs">Entrez les observations éventuelles</label>
                                <input 
                                    name="obs"
                                    className="input input__add" 
                                    onChange={(e) => setObs(e.target.value)}
                                />
                            </div>

                            <Button
                                className="btn"
                                action={() => AddCardAction(name, obs)}
                            >
                                Valider l'avis
                            </Button>

                        </Col>
                    </Row>
                </div>
            </main>
        </div>
    )
}

export default NewCard
