import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = ({ answers, onAnswerClick, state }) => (
  <ul className={classes.answersList}>
    {answers.map((answer, index) => (
      <AnswerItem
        key={index}
        answer={answer}
        onAnswerClick={onAnswerClick}
        state={state && state[answer.id]}
      />
    ))}
  </ul>
)

export default AnswersList
