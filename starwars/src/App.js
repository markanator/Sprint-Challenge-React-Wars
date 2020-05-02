import React from 'react';
import './App.css';
import CharacterWrapper from './components/characterwrapper/CharacterWrapper';

const App = () => {
    return (
        <div className="App">
            <img src='./images/rm-logo.png' alt='Rick and Morty' ></img>
            <h1 className="Header">Characters</h1>
            <div>
                <CharacterWrapper/>
            </div>
        </div>
    );
}

export default App;
