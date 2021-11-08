import React from 'react'
import { ToDoContext } from '../TodoContext'
import './ToDoForm.css'

function ToDoForm() {
  const [newToDoValue, setNewToDoValue] = React.useState('')
  const {
    addToDo,
    setOpenModal
  } = React.useContext(ToDoContext)
  const onChange = (event) => {
    setNewToDoValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    addToDo(newToDoValue)
    setOpenModal(false)
  }
  const onCancel = () => {
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        autofocus
        placeholder="Cortar cebolla para el almuerzo"
        value={newToDoValue}
        onChange={onChange}
      />
      <div className="ToDoForm__buttonContainer">
        <button
          className="ToDoForm__button ToDoForm__button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="ToDoForm__button ToDoForm__button--submit"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { ToDoForm }