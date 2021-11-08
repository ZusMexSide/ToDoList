import React from 'react'
import './ToDosLoading.css'

function ToDosLoading() {
  return (
    <div className="LoadingToDo-container">
      <span className="LoadingToDo__completeIcon" />
      <p className="LoadingToDo__text" >Cargando ToDos...</p>
      <span className="LoadingToDo__deleteIcon" />
    </div>
  )
}

export { ToDosLoading }