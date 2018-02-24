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
    
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

export default QuizContainer;