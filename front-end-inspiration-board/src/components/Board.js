import './Board.css'
import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ board_id, owner, title }) => {
    return (
        <div>
            {board_id} {title} {owner}
            {/* <select
            id={board_id}
            options={board_id} {title} {owner}
            // onChange={handleChange}
            >
            </select> */}
        </div>
    )
} 

export default Board;