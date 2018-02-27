import React, {Component} from 'react';
import Request from '../lib/Request';
import Quiz from '../components/Quiz';

class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      score: 0,
      questions: [],
      currentQuestion: null,
      currentQuestionCount: null,
    }

    this.init = this.init.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  componentDidMount() {
    let request = new Request('http://localhost:3001/api/v1/quizzes/2');
    request.get(this.init);
  }

  init(quiz) {
    this.setState({
      name: quiz.name,
      questions: quiz.questions,
      currentQuestion: quiz.questions[0],
      currentQuestionCount: 1,
    })
  }

  updateScore(answerScore) {
    console.log(typeof answerScore);

    this.setState((prevState) => {
      return {score: prevState.score += parseInt(answerScore)}
    })
  }

  handleNextButtonClick() {
    let questions = this.state.questions;
    let currentQuestion = this.state.currentQuestion;
    let index = questions.indexOf(currentQuestion);
    if(index === questions.length - 1) return console.log('Well done!');
    if(index < questions.length) {
      index++;
      this.setState({
        currentQuestion: questions[index],
        currentQuestionCount: index + 1
      })
    }
  }

  render() {
    return (
      <Quiz 
      score={this.state.score}
      onAnswerClick={this.updateScore}
      onNextButtonClick={this.handleNextButtonClick} 
      count={this.state.currentQuestionCount} 
      name={this.state.name} 
      total={this.state.questions.length} 
      question={this.state.currentQuestion} 
      />
      )
  }
}

export default QuizContainer;