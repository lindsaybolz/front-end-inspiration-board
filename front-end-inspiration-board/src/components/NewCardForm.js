import './NewCardForm.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewCardForm = ({ addNewCardCallback }) => {
    const [formFields, setFormFields] = useState({
        message: '',
    });
    const [error, setError] = useState('no-error')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formFields.message === '' || formFields.message.length > 40 ) {
            setError('error');
        } else {
            addNewCardCallback(formFields);
            setFormFields({
                message: '', 
            });
            setError('no-error');

        }
    };

    const handleChange = (event) => {
        // setError('no-error');
        setFormFields({
            ...formFields, 
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form onSubmit={ handleSubmit } className='new_card_form'>
            <section>
                <h2 className='new-card-h2'>Create a New Card</h2>
                <section className={error}>
                    <h3>Error:</h3>
                    <p>Make sure you have an message for your new card before you create it!  Also be sure your message is under 40 characters please!</p>
                </section>
                <div className='new_card_fields'>
                    <div className='message-input'>
                        <label htmlFor='message'>Message: </label>
                        <input
                            className='message-input-bank'
                            name='message'
                            value={formFields.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className='button new_card_submit'
                        type='submit'
                        value='Add Card'>
                        Add Card
                    </button>
                </div>
            </section>
        </form>
    )
} 

export default NewCardForm;