import React from 'react'

import Button from '../button/button'

const Form = props => {
  return (
    <div className='proj__form'>
      <form className='form'>
        <div className='margin-bottom-medium'>
          <div className='heading'>
            <h2 className='heading__secondary'>
              New project
            </h2>
          </div>
        </div>

        <div className='form__group'>
          <input type='text' className='form__input' placeholder='Name' id='name' required />
          <label htmlFor='name' className='form__label'>Name</label>
        </div>

        <div className='form__group'>
          <input type='text' className='form__input' placeholder='Subtitle' id='subtitle' required />
          <label htmlFor='subtitle' className='form__label'>Subtitle</label>
        </div>

        <div className='form__group'>
          <label className='form__label-checkbox'>Public Project?</label>
          <label className='form__switch'>
            <input type='checkbox' className='form__checkbox' defaultChecked />
            <span className='form__slider form__round'></span>
          </label>
        </div>

        <div className='form__group'>
          <Button />
        </div>
      </form>
    </div>
  )
}

export default Form
