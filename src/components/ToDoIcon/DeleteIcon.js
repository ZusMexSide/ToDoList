import React from 'react'
import { ToDoIcon } from '.'

function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="delete"
      color='#fff'
      onClick={onDelete}
    />
  )
}

export { DeleteIcon }