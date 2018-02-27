import React from 'react';

function Question(props) {
  if(!props.question) return null;
  return (
    <h2 className="question">{props.question.text}</h2>
  )
}


export default Question;