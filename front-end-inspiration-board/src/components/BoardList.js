import './BoardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';

const BoardList = ({ boards }) => {
    const boardComponents = boards.map(boardInstance => {
        return(
            <li key={boardInstance.id}>
                <Board
                board_id={boardInstance.board_id}
                owner={boardInstance.owner}
                title={boardInstance.title}
                />
            </li>
    )})
    
    return (
        <section>
            <ul>
                {boardComponents}
            </ul>
        </section>
    )
}

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            owner: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
}

export default BoardList;