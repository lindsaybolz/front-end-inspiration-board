import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({message, likes, id}) => {
    return <div>
        <h3>Id: {id}</h3>
        <h3>{message}</h3>
        <h3>Like Count: {likes}</h3>
    </div>
} 

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
}

export default Card;