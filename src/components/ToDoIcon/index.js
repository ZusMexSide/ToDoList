import React from 'react'
import './ToDoIcon.css'
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";

const iconTypes = {
  'check': color => (
    <AiOutlineCheckCircle className="Icon Icon--check" color={color}/>
  ),
  'delete': color => (
    <AiOutlineDelete className="Icon Icon--check" color={color}/>
  ),
}

function ToDoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { ToDoIcon }