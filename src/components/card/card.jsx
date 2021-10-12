import React from 'react';
import './card.css';
import 'purecss/build/pure.css'

const Card = ({ children }) => {

    return (
        <div className="aa-cards">
            <div className="aa-cards-body">
                {children}
            </div>
        </div>
    )
}

export default Card;