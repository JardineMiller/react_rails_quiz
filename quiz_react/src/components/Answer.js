import React from 'react';
import '../styles/answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.state = {
      selectedAnswer: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.mapAnswers = this.mapAnswers.bind(this);
  }


  mapAnswers(props) {
    let answers = props.answers.map((answer, index) => {
      return (
        <li onClick={this.handleClick} data-score={answer.points} key={index} className="answerOption">
        <span>{this.letters[index]}</span>
        <p>{answer.text}</p>
        </li>
        )
    });
    return answers;
  }

  handleClick(event) {
    this.props.onAnswerClick(event.currentTarget.dataset.score);
  }

  render() {
    return (
      <ul className="answers">
      {this.mapAnswers(this.props)}
      </ul>
      )
  }


}

export default Answer;