import './NewBoardForm.css';
import React from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = ({ addNewBoardCallback }) => {
    const [formFields, setFormFields] = React.useState({
        owner: '',
        title: ''
    });
    const [hiddenBoard, setHiddenBoard] = React.useState(false)


    // const validateForm = () => {
    //     if (formFields.owner === '' || formFields.title === '') {
    //       alert("Please fill out all fields");
    //       return false;
    //     }
    // }
      
    const handleSubmit = (event) => {
        event.preventDefault();
        // validateForm();
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
        <section>
            <button onClick={() => setHiddenBoard(!hiddenBoard)}>Hide New Board Form</button>
            <form onSubmit={handleSubmit} className='new_board_form' hidden={hiddenBoard}>
                <section>
                    <h2>Create a new board</h2>
                    <div className='new_board_fields'>
                        <div>
                            {/* <section className={error}>Error on new board form</section> */}
                            <label htmlFor='owner'>Owner: </label>
                            <input
                                name='owner'
                                value={formFields.owner}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='title'>Title: </label>
                            <input 
                                name='title'
                                value={formFields.title}
                                onChange={handleChange}
                                required
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
        </section>
    );
};

NewBoardForm.propTypes = {
    addNewBoardCallback : PropTypes.func.isRequired,
}; 


export default NewBoardForm;