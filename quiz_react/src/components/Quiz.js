import React from 'react';
import Question from './Question.js';
import QuestionCount from './QuestionCount.js';
import ScoreCount from './ScoreCount.js';
import Answer from './Answer.js';
import NextButton from './NextButton.js';

function Quiz(props) {
  if(!props.name) return null;
  let question = props.question

  function sendScore(score) {
    props.onAnswerClick(score);
  }

  return (
    <div className="quiz">
      <h3>{props.name}</h3>
      <QuestionCount counter={props.count} total={props.total}/>
      <ScoreCount score={props.score}/>
      <Question question={question} />
      <Answer onAnswerClick={sendScore} answers={question.answers} answered={false}/>
      <NextButton onButtonClick={props.onNextButtonClick}/>
    </div>
  )
}


export default Quiz;