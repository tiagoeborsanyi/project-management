import React from 'react'

const Modal = props => (
    <div className={`modal ${!props.show && 'visibility'}`}>
      <div className='modal__content'>
        {props.children}
      </div>
    </div>
  )

export default Modal
