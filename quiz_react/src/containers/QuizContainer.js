import React, {Component} from 'react';
import Request from '../lib/Request';

class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      questions: []
    }
  }

  componentDidMount() {
    let request = new Request('http://localhost:3001/api/v1/quizzes/2');
    request.get();
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

export default QuizContainer;