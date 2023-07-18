import './BoardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';

const BoardList = ({ boards, changeBoardCallback }) => {
    const boardComponents = boards.map(boardInstance => {
        return(
            <li key={boardInstance.id}>
                <Board
                id={boardInstance.id}
                owner={boardInstance.owner}
                title={boardInstance.title}
                changeBoardCallback={changeBoardCallback}
                />
            </li>
    )})
    
    return (
        <section className='BoardList'>
            <h1>Boards:</h1>
            <ul>
                {boardComponents}
            </ul>
        </section>
    )
}

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            owner: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
    changeBoardCallback: PropTypes.func.isRequired
}

export default BoardList;