import React from 'react'
import './ToDoList.css'

function ToDoList(props) {
  return (
    <section>
      <ul className="container">
        { props.children }
      </ul>
    </section>
  )
}

export { ToDoList }
