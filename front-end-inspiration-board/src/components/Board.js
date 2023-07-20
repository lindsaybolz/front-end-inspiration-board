import './Board.css'
import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ id, owner, title, changeBoardCallback }) => {
    return (
        <section className='BoardOuterContainer'>
            <div className='Board' onClick={()=>changeBoardCallback(id)}>
                <div className='Title'>{title}</div>
                <div className='Owner'>{owner}</div>
            </div>
        </section>
    )
} 

Board.propTypes = {
    id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeBoardCallback: PropTypes.func.isRequired
}

export default Board;