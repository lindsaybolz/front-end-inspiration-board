import './Board.css'
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Board = ({ id, owner, title, changeBoardCallBack }) => {
    const [minimized, setMinimized] = useState('minimized')
    const [notMinimized, setNotMinimized] = useState('show')
    const toggleMinimize = () => {
        if (minimized === 'show') {
            setMinimized('minimized');
            setNotMinimized('show')
        } else {
            setMinimized('show');
            setNotMinimized('minimized')
        };
    };

    const handleBoardClick = (id) => {
        if (minimized === 'minimized') {
            setMinimized('show');
            setNotMinimized('minimized');
        } 
        changeBoardCallBack(id);            
    }

    return (
        <div className='board' onClick={() => handleBoardClick(id)}>
            <div className='board-header'> 
                <div className={`minimized-title ${notMinimized}`}>{ title }</div>
                <div className='board-mushroom-button' onClick={() => toggleMinimize()}> 🍄 </div>
            </div>
            <div className={minimized}>
                <p className='title'>{ title }</p>
                <p className='owner'>By {owner }</p>
            </div>
        </div>
    );
}

Board.propTypes = {
    id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeBoardCallBack: PropTypes.func.isRequired,
}

export default Board;