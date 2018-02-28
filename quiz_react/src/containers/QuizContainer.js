import React, {Component} from 'react';
import Request from '../lib/Request';
import Quiz from '../components/Quiz';

class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      name: null,
      score: 0,
      maxScore: 0,
      questions: [],
      currentQuestion: null,
      currentQuestionCount: null,
      complete: false
    }
    this.initialState = this.state;
    this.reset = this.reset.bind(this);
    this.init = this.init.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.setName = this.setName.bind(this);
  }

  setName(name) {
    this.setState({
      user: name
    })
  }

  componentDidMount() {
    let request = new Request('http://localhost:3001/api/v1/quizzes/1');
    request.get(this.init);
  }

  reset() {
    this.setState(this.initialState);
    this.componentDidMount()
  }

  init(quiz) {
    this.setState({
      name: quiz.name,
      questions: quiz.questions,
      currentQuestion: quiz.questions[0],
      currentQuestionCount: 1,
      maxScore: quiz.questions[0].answers[0].points * quiz.questions.length
    })
  }

  updateScore(answerScore) {
    this.setState((prevState) => {
      return {score: prevState.score += parseInt(answerScore, 10)}
    })
  }

  handleNextButtonClick() {
    let questions = this.state.questions;
    let currentQuestion = this.state.currentQuestion;
    let index = questions.indexOf(currentQuestion);
    if(index === questions.length - 1) {
      this.setState({
        complete: true
      })
      return;
    }
    if(index < questions.length) {
      index++;
      this.setState((prevState) => {
        return {
          currentQuestion: questions[index],
          currentQuestionCount: prevState.currentQuestionCount += 1
        }
      })
    }
  }

  render() {
    return (
      <Quiz 
      setName={this.setName}
      user={this.state.user}
      score={this.state.score}
      onAnswerClick={this.updateScore}
      onNextButtonClick={this.handleNextButtonClick} 
      count={this.state.currentQuestionCount} 
      name={this.state.name} 
      total={this.state.questions.length} 
      question={this.state.currentQuestion} 
      complete={this.state.complete}
      maxScore={this.state.maxScore}
      reset={this.reset}
      />
      )
  }
}

export default QuizContainer;