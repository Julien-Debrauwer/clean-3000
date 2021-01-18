import React from 'react';
import { Col } from 'antd'

// Composant dit stateless autrement dit le composant n'a pas besoin de state
const Card = ({ name, description, bgColor, action }) => {
    return (
        <Col xs={24} md={12} lg={6}>
            <div className="card" onClick={action} style={{ backgroundColor: bgColor }}>
                <div>
                    <h2 className='card-title'>{ name }</h2>
                    <p>{ description }</p>
                </div>
            </div>
        </Col>
    );
}

export default Card;
