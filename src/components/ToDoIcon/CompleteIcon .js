import React from 'react'
import { ToDoIcon } from '.'

function CompleteIcon({ completed, onComplete }) {
  return (
    <ToDoIcon
      type="check"
      color={completed ? '#1cedae' : '#fff'}
      onClick={onComplete}
    />
  )
}

export { CompleteIcon }
