import React from 'react';
import '../styles/welcome.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      visibie: true
    }

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  render() {
    return (
      <div className="overlay">
      <div className="card large">
      <h2>Welcome!</h2>
      <h4>Please enter your name below to begin</h4>
      <input onKeyUp={this.handleNameInput} className="form-input" type="text"/>
      <button onClick={this.handleNameSubmit} className="button-small">Start</button>
      </div>
      </div>
      )
  }

  handleNameInput(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleNameSubmit() {
    this.setState({
      visible: false
    })
    this.props.submitName(this.state.name);
  }
}

export default Welcome;