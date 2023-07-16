import './NewBoardForm.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewBoardForm = ({ addNewBoardCallback }) => {
    const [formFields, setFormFields] = useState({
        owner: '',
        title: ''
    });
    const [error, setError] = useState('no-error')
    const [hideForm, setHideForm] = useState('show')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formFields.owner === '' || formFields.title === '') {
            setError('error');
        } else {
            setError('no-error');
            addNewBoardCallback(formFields);
            setFormFields({
                owner: '', 
                title: ''
            });
        }
    };

    const handleChange = (event) => {
        setError('no-error');
        setFormFields({
            ...formFields, 
            [event.target.name]: event.target.value,
        });
    }
    
    const toggleHidden = () => {
        if (hideForm === 'show') {
            setHideForm('hidden')
        } else {
            setHideForm('show')
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-board-header'>
                <div className='toggle-hidden-button' onClick={() => toggleHidden()}>
                    🍄
                </div>
                {/* <div>
                    Mushroom Inspo
                </div> */}
            </div>
            <section className={`new_board_form ${hideForm}`}>
                <h2 className='new-board-h2'>Create a New Mushroom Board</h2>
                <section className={error}>
                    <h3>Error:</h3>
                    <p>Make sure you have an owner and title for your new board before you create it!</p>
                </section>
                <div className='new_board_fields'>
                    <div className='title-input'>
                        <label htmlFor='title'>Title: </label>
                        <input 
                            className='title-input-bank'
                            name='title'
                            value={formFields.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='owner-input'>
                        <label htmlFor='owner'>Owner: </label>
                        <input 
                            className='owner-input-bank'
                            name='owner'
                            value={formFields.owner}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className='button new_board_submit'
                        type='submit'
                        value='Add Board'>
                        Add Board
                    </button>
                </div>
            </section>
        </form>
    );
};

NewBoardForm.propTypes = {
    addNewBoardCallback : PropTypes.func.isRequired,
}; 


export default NewBoardForm;