import React, { Component } from 'react';

import '../WordCard.css';

import WordInput from './WordInput';

class WordCard extends Component {

    pronounFormatter(pronoun) {
        switch (pronoun) {
            case '3p':
                return 'Uds/Ellos/Ellas';
            case '2s':
                return 'Tú';
            case '3s':
                return 'Ud/El/Ella';
            case '1p':
                return 'Nosotros/as';
            case '2p':
                return 'Vosotros/as';
            case '1s':
                return 'Yo';
            default:
                return pronoun;
        }
    }

    submitAnswers(event) {
        event.preventDefault();
        console.log(this.input1s.checkAnswer());
        console.log(this.input2s.checkAnswer());
        console.log(this.input3s.checkAnswer());
        console.log(this.input1p.checkAnswer());
        console.log(this.input2p.checkAnswer());
        console.log(this.input3p.checkAnswer());
    }

    renderCard() {
        const { details } = this.props;

        if (details.word) {
            return (

                <div className="word-card-container">
                    <h3 className="word-name">
                        {`${details.word} - ${details.meaning}`}
                    </h3>
                    <form className="word-answer-form" ref={(input) => this.wordForm = input}
                            onSubmit={(e) => this.submitAnswers(e)}>
                        <WordInput key={`${'1s'}-${this.pronounFormatter('1s')}`}
                                ref={(input) => this.input1s = input}
                                conj={details.conj['1s']}
                                pronoun={this.pronounFormatter('1s')} />
                        <WordInput key={`${'2s'}-${this.pronounFormatter('2s')}`}
                                ref={(input) => this.input2s = input}
                                conj={details.conj['2s']}
                                pronoun={this.pronounFormatter('2s')} />
                        <WordInput key={`${'3s'}-${this.pronounFormatter('3s')}`}
                                ref={(input) => this.input3s = input}
                                conj={details.conj['3s']}
                                pronoun={this.pronounFormatter('3s')} />
                        <WordInput key={`${'1p'}-${this.pronounFormatter('1p')}`}
                                ref={(input) => this.input1p = input}
                                conj={details.conj['1p']}
                                pronoun={this.pronounFormatter('1p')} />
                        <WordInput key={`${'2p'}-${this.pronounFormatter('2p')}`}
                                ref={(input) => this.input2p = input}
                                conj={details.conj['2p']}
                                pronoun={this.pronounFormatter('2p')} />
                        <WordInput key={`${'3p'}-${this.pronounFormatter('3p')}`}
                                ref={(input) => this.input3p = input}
                                conj={details.conj['3p']}
                                pronoun={this.pronounFormatter('3p')} />
                        <button type="submit">Check Answers</button>
                    </form>
                </div>
            )
        } else {
            return (
                <h3 className="word-name">
                    {`No word selected`}
                </h3>
            )
        }
    }

    render() {
        return this.renderCard();
    }
};

export default WordCard;