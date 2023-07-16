import './CardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardList = ({ cards, removeCard, addLike }) => {
    let emptyCards = 'empty'
    let boardTitle = ''
    if (cards.length !== 0) {
        emptyCards = 'not-empty'
        boardTitle = cards[0].board
    } ;
    
    const cardComponents = cards.map(cardInstance => {
        return(
            <li key={cardInstance.id}>
                <Card
                    id={ cardInstance.id }
                    message={ cardInstance.message }
                    likes={ cardInstance.likes }
                    board={ cardInstance.board }
                    removeCard={ removeCard }
                    addLike={ addLike }/>
            </li>
        )
    })
    
    return (
        <section className={`card-list-containter ${emptyCards}`}>
            <h2>Cards for { boardTitle }</h2>
            <ul className='card-list'>
                {cardComponents}
            </ul>
        </section>
    )
} 

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        board: PropTypes.string.isRequired,
    })),
    removeCard: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
}

export default CardList;