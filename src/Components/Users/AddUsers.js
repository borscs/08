import React, {useState, Fragment} from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUsers.module.css';
import ErrorHandler from "../UI/ErrorHandler";


const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError( {
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty)',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const userNameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChange = event => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }


    return (
        <Fragment>
            {error && ( <ErrorHandler title={error.title} message={error.message} onConfirm={errorHandler} />)}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        id="username"
                        type="text"
                        onChange={userNameChangeHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="text"
                        onChange={ageChange}
                        value={enteredAge}
                    />
                    <Button type="submit">AddUser</Button>
                </form>
            </Card>
        </Fragment>
    );
}

export default AddUsers;
