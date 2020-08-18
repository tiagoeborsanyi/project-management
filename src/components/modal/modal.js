import React from 'react'

const Modal = props => {
  return (
    <div className='modal'>
      <div className='modal__content'>
        {props.children}
      </div>
    </div>
  )
}

export default Modal
