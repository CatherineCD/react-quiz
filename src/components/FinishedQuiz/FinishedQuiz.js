import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from './../UI/Button/Button'
import { Link } from 'react-router-dom'

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={classes.finishedQuiz}>
      <ul className={classes.list}>
        {quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[results[quizItem.id]],
          ]

          return (
            <li key={quizItem.id} className={classes.item}>
              <strong>{index + 1}&nbsp;.</strong>
              {quizItem.question}&nbsp;
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>
      <p>
        Правильно {successCount} из {quiz.length}
      </p>

      <div>
        <Button onClick={onRetry} type='primary'>
          Повторить
        </Button>

        <Link to='/'>
          <Button type='success'>Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz
