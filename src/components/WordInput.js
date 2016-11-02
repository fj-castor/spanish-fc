import React, { Component } from 'react';

import '../WordCard.css';

class WordInput extends Component {

    constructor(props) {
        super(props);
        this.getValue = this.getValue.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    getValue() {
        return this.input.value;
    }

    checkAnswer() {
        return this.input.value === this.props.conj;
    }

    render() {
        const conj = this.props.conj;
        const pronoun = this.props.pronoun;
        return (
            <div className="word-answer-input-container">
                <span className="word-pronoun">
                    <h4>{pronoun}</h4>
                </span>
                <input ref={(input) => this.input = input}
                        className="word-answer-input" type="text" placeholder={conj} />
            </div>
        )
    }

}

// function WordInput(props) {
//     const conj = props.conj;
//     const pronoun = props.pronoun;

//     return (
//         <div className="word-answer-input-container">
//             <span className="word-pronoun">
//                 <h4>{pronoun}</h4>
//             </span>
//             <input className="word-answer-input" type="text" placeholder={conj} />
//         </div>
//     );
// }

export default WordInput;