import React, {Fragment, useState} from 'react';
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";


function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };


    return (
        <Fragment>
            <AddUsers onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </Fragment>
    );
}

export default App;
