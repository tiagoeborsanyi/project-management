import React from 'react'

const FloatButton = props => (
  <section className='section-float-button'>
    <div className='float-button'>
      <button
        className={`float-button__button ${props.actived && 'actived'}`}
        onClick={props.clicked}>+</button>
    </div>
  </section>
)

export default FloatButton
