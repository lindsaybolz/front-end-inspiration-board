import './NewBoardForm.css';
import React from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = ({ addNewBoardCallback }) => {
    const [formFields, setFormFields] = React.useState({
        owner: '',
        title: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        addNewBoardCallback(formFields);

        setFormFields({
            owner: '', 
            title: ''
        });
    };

    const handleChange = (evt) => {
        setFormFields({...formFields, [evt.target.name]: evt.target.value})
        
    };

    return (
        <form onSubmit={handleSubmit} className='new_board_form'>
            <section>
                <h2>Create a new board</h2>
                <div className='new_board_fields'>
                    <div>
                    <label htmlFor='owner'>Owner: </label>
                    <input
                        name='owner'
                        value={formFields.owner}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                        <label htmlFor='title'>Title: </label>
                        <input 
                            name='title'
                            value={formFields.title}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className='button new_board_submit'
                        type='submit'
                        value='Add New Board'
                    >
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