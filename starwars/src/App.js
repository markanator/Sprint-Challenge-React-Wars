import React from 'react';
import './App.css';
import CharacterWrapper from './components/characterwrapper/CharacterWrapper';

const App = () => {
    return (
        <div className="App">
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Rick and Morty' height="100px" width="auto" ></img>
            <h1 className="Header">Characters</h1>
            <div>
                <CharacterWrapper/>
            </div>
            <p>By: Mark Ambrocio 2020</p>
        </div>
    );
}

export default App;
