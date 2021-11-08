import React from 'react'
import { ToDoContext } from '../TodoContext'
import { ToDoCounter } from '../ToDoCounter'
import { ToDoSearch } from '../ToDoSearch'
import { ToDoList } from '../ToDoList'
import { CreateToDoButton } from '../CreateToDoButton'
import { TodoItem } from '../TodoItem'
import { Modal } from '../Modal'
import { ToDoForm } from '../ToDoForm'
import { ToDosError } from '../ToDosError'
import { ToDosLoading } from '../ToDosLoading'
import { EmptyToDos } from '../EmptyToDos'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext)
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <ToDosError error={error} />}
        {loading && new Array(5).fill(null).map((a, i) => <ToDosLoading key={i} />)}
        {(!loading && !searchedTodos.length) && <EmptyToDos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ToDoList>
      {openModal && (
        <Modal>
          <ToDoForm></ToDoForm>
        </Modal>
      )}
      <CreateToDoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
        optionIcon={(openModal) ? 'close' : 'open'}
      />
    </React.Fragment>
  )
}

export { AppUI } 
