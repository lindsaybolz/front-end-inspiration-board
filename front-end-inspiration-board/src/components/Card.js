import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({message, likes, id, addLikeCallback, removeCardCallback}) => {
    return <div>
        <h3>Id: {id}</h3>
        <h3>{message}</h3>
        <h3>Like Count: {likes}</h3>
        <div onClick={()=>addLikeCallback(id)}>🍄</div>
        <button onClick={()=>removeCardCallback(id)}>Remove Card</button>
    </div>
} 

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    removeCardCallback: PropTypes.func.isRequired,
    addLikeCallback: PropTypes.func.isRequired,
}

export default Card;