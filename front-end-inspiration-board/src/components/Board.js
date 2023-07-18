import './Board.css'
import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ id, owner, title, changeBoardCallback }) => {
    return (
        <div onClick={()=>changeBoardCallback(id)}>
            {id} {title} {owner}
            {/* <select
            id={id}
            options={id} {title} {owner}
            // onChange={handleChange}
            >
            </select> */}
        </div>
    )
} 

Board.propTypes = {
    id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeBoardCallback: PropTypes.func.isRequired
}

export default Board;