import React from 'react';
import '../styles/popup.css';

function PopUp(props) {
  return (
    <div className="overlay">
      <div className="card">
        <h4>Thank you for completing the quiz!</h4>
        <p>You scored {props.score} out of {props.maxScore}</p>
        <button className="button-small" onClick={restart}>Restart</button>
      </div>
    </div>
  )

  function restart() {
    props.onReset();
  }
}


export default PopUp;