import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserMessage from './components/UserMessage';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <UserMessage />
            </header>
        </div>
    );
}

export default App;
