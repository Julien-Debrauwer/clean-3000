import React from 'react'
import { connect } from 'react-redux';
import { Row, Col } from 'antd'
import Header from './Header'
import { Button } from './Button'
import { addOrder } from '../actions';

const NewCard = () => {
    const AddCardAction = () => {
        // dispatch(addNewTask(taskText))
        // setTaskText("")
        console.log('hello');
    }
    return (
        <div>
            <Header/>
            <div className="container">
                <Row gutter={[24, 24]} justify="space-between" >
                    <Col xs={24} md={12} lg={6}>
                        <div className="card-group">
                            <label Htmlfor="name">Entrer le nom du client ou de l'entreprise</label>
                            <input 
                                name="name"
                                className="input input__add" 
                                // onChange={(e) => setTaskText(e.target.value)}
                                // value={taskText}
                            />
                        </div>
                        <div className="card-group">
                            <label Htmlfor="obs">Entrez les observations éventuelles</label>
                            <input 
                                name="obs"
                                className="input input__add" 
                                // onChange={(e) => setTaskText(e.target.value)}
                                // value={taskText}
                            />
                        </div>

                        <Button
                            className="btn"
                            action={() => AddCardAction()}
                        >
                            Valider l'avis
                        </Button>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default NewCard
