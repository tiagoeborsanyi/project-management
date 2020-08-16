import React from 'react'

const COntentCardDefault = props => {
  return (
    <div>
      <div className='row geral'>
        <div className='geral__column1'>
          <span className={`material-icons geral__column1-folder ${props.data.cor}`}>folder</span>
          <div>
            <h2 className='geral__column1-title'>{props.data.title}</h2>
            <p className='geral__column1-subtitle'>{props.data.subtitle}</p>
          </div>
        </div>
        <div className='geral__column2'>
          <button className='geral__column2-button'><span className={`material-icons geral__column2-button--icon ${props.data.cor}`}>more_vert</span></button>
        </div>
      </div>
      <div className={`progress ${props.data.cor}`} style={{width: `${props.data.progress}%`}}></div>
      {props.data.progress === '100' ?
        <p className='progress__subtitle'>Complete - 100% Done</p> :
        <p className='progress__subtitle'>On progress - {props.data.progress}% Done</p>
      }

    </div>
  )
}

export default COntentCardDefault
