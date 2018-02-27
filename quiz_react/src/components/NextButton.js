import React from 'react';

function NextButton(props) {
  return (
    <button onClick={nextQuestion} className="button right">Next</button>
  )

  function nextQuestion(event) {
    props.onButtonClick();
  }
}

export default NextButton;