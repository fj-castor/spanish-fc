import React, { Component } from 'react';
import wordDict from '../../word-dict';

import logo from '../logo.svg';
import '../App.css';

import WordCard from './WordCard';

class App extends Component {

    constructor() {
        super();
        this.getRandomWord = this.getRandomWord.bind(this);
        this.state = {
            currentWord: {},
            score: 0
        }
    }

    getRandomWord() {
        const currentWord = wordDict[Math.floor(Math.random() * wordDict.length)];

        this.setState({ currentWord });
    }

    render() {
        const word = this.state.currentWord;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Conjugate This!</h2>
                </div>
                <div className="App-intro">
                    <button onClick={this.getRandomWord}>Get Word</button>
                    <WordCard key={word.word} details={word} />
                </div>
            </div>
        );
    }

    componentDidMount() {

    }
}

export default App;
