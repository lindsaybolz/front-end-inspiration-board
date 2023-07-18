import './CardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardList = ({ cards }) => {
    console.log(cards)
    const cardComponents = cards.map(cardInstance => {
        return(
            <li key={cardInstance.id}>
                <Card
                    id={cardInstance.id}
                    message={cardInstance.message}
                    likes={cardInstance.likes}
                />
            </li>
    )})
    
    return (
        <section>
            <h1>Card List: </h1>
            <ul>
                {cardComponents}
            </ul>
        </section>
    )
}

export default CardList;