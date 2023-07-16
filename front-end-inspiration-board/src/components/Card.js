import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ id, message, likes, board, removeCard, addLike }) => {
    return (
        <section className='card'>
            <p className='message'>{ message }</p>
            <div className='likes'>
                { likes } likes
                <button className='add-like-button' onClick={ () => addLike(id) }>👍</button>
            </div>
            <button className='remove-card-button' onClick={ () => removeCard(id) }>Remove Card</button>
        </section>
    )
} 

Card.propTypes = {
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    board: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
}
export default Card;