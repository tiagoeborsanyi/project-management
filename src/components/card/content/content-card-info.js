import React from 'react'


const ContentCardInfo = props => (
    <React.Fragment>
      <div className='row geral'>
        <div className='geral__column1'>
          <div className='geral__column1-day'>
            <p>Today</p>
          </div>
          <span className={`material-icons geral__column1-folder ${props.data.cor}`}>insert_photo</span>
          <div>
            <h2 className='geral__column1-title'>{props.data.title}</h2>
            <p className='geral__column1-clock'>9:00 pm</p>
            <p className='geral__column1-subtitle'>{props.data.subtitle}</p>
          </div>
        </div>
        <div className='geral__column2'>
          <button className='geral__column2-button'><span className={`material-icons geral__column2-button--icon ${props.data.cor}`}>more_vert</span></button>
        </div>
      </div>
    </React.Fragment>
  )

export default ContentCardInfo
