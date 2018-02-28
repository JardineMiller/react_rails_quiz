import React from 'react';
import '../styles/welcome.css';

function Welcome(props) {
  return (
    <div className="overlay">
      <div className="card large">
        <h2>Welcome!</h2>
        <h4>Please enter your name below to begin</h4>
        <input className="form-input" type="text"/>
        <button className="button-small">Start</button>
      </div>
    </div>
  )
}

export default Welcome;