import './CardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardList = ({ cards, addLikeCallback, removeCardCallback, sortCardsCallback }) => {
    // console.log(cards)
    
    const boardTitle = ''
    if (!cards === []) {
        console.log(cards)
        boardTitle = cards[0].board
    }
    const cardComponents = cards.map(cardInstance => {
        return(
            <li key={cardInstance.id}>
                <Card
                    id={cardInstance.id}
                    message={cardInstance.message}
                    likes={cardInstance.likes}
                    addLikeCallback={addLikeCallback}
                    removeCardCallback={removeCardCallback}
                />
            </li>
    )})
    
    return (
        <section className='CardList'>
            <h2 className='card-header'>Cards for {boardTitle}</h2>
            <div className='sort-alphabetically-button' onClick={() => sortCardsCallback(cards)}>🔤</div>
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
    addLikeCallback: PropTypes.func.isRequired,
    removeCardCallback: PropTypes.func.isRequired,
    sortCardsCallback: PropTypes.func.isRequired,
}

export default CardList;