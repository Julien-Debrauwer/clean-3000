import React from 'react';
import { Col } from 'antd'

// Composant dit stateless autrement dit le composant n'a pas besoin de state
const Card = ({ name, description, bgColor, action }) => {
    return (
        <Col xs={24} md={12} lg={6} className="card">
            <div className="tile" onClick={action} style={{ backgroundColor: bgColor }}>
                <div className="tile-text">
                    <h2>{ name }</h2>
                    <p>{ description }</p>
                </div>
            </div>
        </Col>
    );
}

export default Card;
