import React from 'react';
import '../styles/answer.css';
import NextButton from './NextButton.js';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.state = {
      selectedAnswer: null,
      answered: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.mapAnswers = this.mapAnswers.bind(this);
    this.shuffleAnswers = this.shuffleAnswers.bind(this);
  }

  mapAnswers(props) {
    console.log(props);
    return props.answers.map((answer, index) => {
      return (
        <li onClick={this.handleClick} data-score={answer.points} key={index} className="answerOption">
        <span>{this.letters[index]}</span>
        <p>{answer.text}</p>
        </li>
        )
    });
  }

  shuffleAnswers(array) {
    return array.sort(function() {
      return 0.5 - Math.random()
    })
  }

  handleNext() {
    if(this.state.selectedAnswer) {
      this.props.onNextClick();
      this.state.selectedAnswer.classList.remove('selected');
      this.setState({
        selectedAnswer: null
      })
    }

  }

  handleClick(event) {
    if(!this.state.selectedAnswer) {
      this.props.onAnswerClick(event.currentTarget.dataset.score);
      this.setState({
        selectedAnswer: event.currentTarget,
        selected: true
      })
      event.currentTarget.classList.add('selected');
    }
  }

  render() {
    return (
      <div className="answer-block">
        <ul className="answers">
        {this.mapAnswers(this.props)}
        </ul>
        {this.state.selectedAnswer && <NextButton onButtonClick={this.handleNext}/>}
      </div>
      )
  }


}

export default Answer;