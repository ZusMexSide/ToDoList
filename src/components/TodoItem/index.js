import React from 'react'
import { CompleteIcon } from '../ToDoIcon/CompleteIcon '
import { DeleteIcon } from '../ToDoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li
      className={`toDoItem ${props.completed && 'toDoItem--completed'}`}>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`toDoItem__text ${props.completed && 'toDoItem__text--completed'}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  )
}

export { TodoItem }
