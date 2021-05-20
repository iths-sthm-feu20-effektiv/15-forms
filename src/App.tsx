import React from 'react';
import Form from './components/form/Form'
import UpdateAddress from './components/form/UpdateAddress'
import './App.css';

function App() {
    return (
        <div className="App">
        <h1> Formulär </h1>

        <UpdateAddress />

        <hr/>
        <Form />
        </div>
    );
}

export default App;
