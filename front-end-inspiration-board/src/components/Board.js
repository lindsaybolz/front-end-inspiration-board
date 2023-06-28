import './Board.css'
import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ board_id, owner, title }) => {
    return (
        <div>
            <select
            id={board_id}
            options={title}
            onChange={handleChange}>
            </select>
        </div>
    )
} 

export default Board;