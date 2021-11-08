import React from 'react'
import { ToDoContext } from '../TodoContext';
import './ToDoCounter.css';

function ToDoCounter() {
  const { totalTodos, completedTodos } = React.useContext(ToDoContext)
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs 😄</h2>
  )
}

export { ToDoCounter }
