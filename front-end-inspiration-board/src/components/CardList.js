import './CardList.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardList = ({ cards, addLikeCallback, removeCardCallback, sortCardsCallback }) => {
    
    const [hiddenCardList, setHiddenCardList] = useState(true)

    let boardTitle = '';
    if (cards.length > 0) {
        // setHiddenCardList(false)
        boardTitle = cards[0].board;
    } else {
        // setHiddenCardList(true)
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
            <h2 className='no-board-selected' hidden={(cards.length === 0) ? false : true}>No Board Currently Selected</h2>
            <div hidden={(cards.length === 0) ? true : false}>
                <h2 className='card-header'>Cards for {boardTitle}</h2>
                <div className='sort-alphabetically-button' onClick={() => sortCardsCallback(cards)}>🔤</div>
                <ul className='CardList-UL'>
                    {cardComponents}
                </ul>
            </div>
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