import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({message, likes, id, addLikeCallback, removeCardCallback}) => {
    return (
        <div className='card'>
            <h3 className='message'>{message}</h3>
            <section className='card-buttons'>
                <div className='add-like-button' onClick={()=>addLikeCallback(id)}>{likes} 🍄</div>
                <div className='remove-card-button' onClick={()=>removeCardCallback(id)}>✂️</div>
            </section>
        </div>
    )
} 

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    removeCardCallback: PropTypes.func.isRequired,
    addLikeCallback: PropTypes.func.isRequired,
}

export default Card;