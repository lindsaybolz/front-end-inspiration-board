import './CardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardList = ({ cards, addLikeCallback }) => {
    // console.log(cards)
    const cardComponents = cards.map(cardInstance => {
        return(
            <li key={cardInstance.id}>
                <Card
                    id={cardInstance.id}
                    message={cardInstance.message}
                    likes={cardInstance.likes}
                    addLikeCallback={addLikeCallback}
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

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
        })
    ),
    addLikeCallback: PropTypes.func.isRequired
}

export default CardList;