import React, { useState } from 'react';
import s from "./Select.module.css";

const Select = ({ tasks }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(tasks[0].correct);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);


  const onNextBtnClick = () => {
    if (questionNumber < tasks.length-1) {
      setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
      setCorrectAnswer(tasks[questionNumber].correct)
    }
  }
  
  const onPreviousBtnClick = () => {
    if (questionNumber === 0) {
      return;
    } else {
      setQuestionNumber(prevQuestionNumber => prevQuestionNumber - 1);
       setCorrectAnswer(tasks[questionNumber].correct)
    }
  }

  const onVariantBtnClick = (e) => {
    setUserAnswer(e.target.id)
  }

  const onCheckBtnClick = () => {
    if (userAnswer.trim() === correctAnswer.trim()) {
      if (score < tasks.length) {
        setScore(prevScore => prevScore += 1);
      }
    }
  }

  return (
    <div>
      <p>Question {questionNumber+1}/{tasks.length}</p>
      <p>Score {score}/{tasks.length}</p>
      <div>
        <ul>
          <button className={s.navigator} onClick={onPreviousBtnClick}>previous</button>
        <button className={s.navigator} onClick={onNextBtnClick}>next</button>
        </ul>
        <p>{tasks[questionNumber].question}</p>
        <ul>
          <li>
            <button
              type='button'
              className={s.variants}
              onClick={onVariantBtnClick}
              id={tasks[questionNumber].variant1}
            >
              {tasks[questionNumber].variant1}
            </button>
          </li>
          <li>
            <button
              type='button'
              className={s.variants}
              onClick={onVariantBtnClick}
              id={tasks[questionNumber].variant2}
            >
              {tasks[questionNumber].variant2}
            </button>
          </li>
          <li>
            <button
              type='button'
              className={s.variants}
              onClick={onVariantBtnClick}
              id={tasks[questionNumber].variant3}
            >
              {tasks[questionNumber].variant3}
            </button>
          </li>
          <li>
            <button
              type='button'
              className={s.variants}
              onClick={onVariantBtnClick}
              id={tasks[questionNumber].variant4}
            >
              {tasks[questionNumber].variant4}
            </button>
          </li>
        </ul>
        
        <button type='button' onClick={onCheckBtnClick}>Check</button>
      </div>
    </div>
    // <ol>
    //     {
    //       tasks.map(({ id, question, variant1, variant2, variant3, variant4, correct }) => (
    //         <li key={id}>
    //           <p className='question'>
    //             {question}
    //           </p>
    //           <select name="answers" id='answers' onChange={e => handleSelectChange(e, correct)}>
    //             <option value=" "> </option>
    //             <option value={variant1}>{variant1}</option>
    //             <option value={variant2}>{variant2}</option>
    //             <option value={variant3}>{variant3}</option>
    //             <option value={variant4}>{variant4}</option>
    //           </select>
    //           <p>result {state.toString()}</p>
    //         </li>
    //       ))
    //     }
    //   </ol>
  )
}

export default Select