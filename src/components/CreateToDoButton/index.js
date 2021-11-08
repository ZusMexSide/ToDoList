import React from 'react'
import { AiOutlineClose, AiTwotonePlusCircle } from 'react-icons/ai'
import './CreateToDoButton.css'

const icon = {
  'open': () => '+',
  'close': () => (
    <AiOutlineClose
      size={'.8em'}
      color='#fff'
    />)
}

function CreateToDoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  }

  return (
    <button
      className='button'
      onClick={onClickButton}
    >{icon[props.optionIcon]()}</button>
  )
}

export { CreateToDoButton }
