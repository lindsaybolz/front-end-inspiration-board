import './BoardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';

const BoardList = ({ boards, changeBoardCallBack }) => {
    const boardComponents = boards.map(boardInstance => {
        return(
            <li key={boardInstance.id}>
                <Board
                    id={boardInstance.id}
                    owner={boardInstance.owner}
                    title={boardInstance.title}
                    changeBoardCallBack={changeBoardCallBack}
                />
            </li>
    )})
    
    return (
        <section className='board-list-container'>
            <h2>Boards</h2>
            <ul className='board-list'>
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
    changeBoardCallBack: PropTypes.func.isRequired,
}

export default BoardList;