import React from 'react';
import Question from './Question.js';
import QuestionCount from './QuestionCount.js';
import ScoreCount from './ScoreCount.js';
import Answer from './Answer.js';
import PopUp from './PopUp.js';
import Welcome from './Welcome.js';
import '../styles/quiz.css';

function Quiz(props) {
  if(!props.name) return null;
  let question = props.question

  function sendScore(score) {
    props.onAnswerClick(score);
  }

  function sendName(name) {
    props.setName(name);
  }

  function onNextButtonClick() {
    props.onNextButtonClick();
  }

  function onResetClick() {
    props.reset();
  }

  return (
    <div className="quiz-container">
      {!props.user && <Welcome submitName={sendName} />}
      <div className="quiz">
        <h2 className="quiz-name">{props.name}</h2>
        <QuestionCount counter={props.count} total={props.total}/>
        <ScoreCount score={props.score}/>
        <Question question={question} />
        <Answer onNextClick={onNextButtonClick} onAnswerClick={sendScore} answers={question.answers}/>
      </div>
      {props.complete && <PopUp user={props.user} onReset={onResetClick} score={props.score} maxScore={props.maxScore}/>}
    </div>
    )
}


export default Quiz;