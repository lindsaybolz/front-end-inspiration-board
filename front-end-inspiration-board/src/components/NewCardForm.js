import './NewCardForm.css';
import React from 'react';
import PropTypes from 'prop-types';

const NewCardForm = ({ addNewCardCallback }) => {
    const [formFields, setFormFields] = React.useState({
        message: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        addNewCardCallback(formFields);

        setFormFields({
            message: ''
        });
    };

    const handleChange = (evt) => {
        setFormFields({...formFields, [evt.target.name]: evt.target.value})
        
    };

    return (
        <form onSubmit={handleSubmit} className='new_card_form'>
            <section>
                <h2>Create a new card</h2>
                <div className='new_card_fields'>
                    <div>
                    <label htmlFor='message'>Message: </label>
                    <input
                        name='message'
                        value={formFields.message}
                        onChange={handleChange}
                    />
                    </div>
                    <button
                        className='button new_card_submit'
                        type='submit'
                        value='Add New Card'
                    >
                        Add Card
                    </button>
                </div>
            </section>
        </form>
    );
};

NewCardForm.propTypes = {
    addNewCardCallback : PropTypes.func.isRequired,
}; 


export default NewCardForm;