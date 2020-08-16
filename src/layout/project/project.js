import React from 'react'

import data from '../../fake-data/data-projects'
import ContentCardDefault from '../../components/card/content/content-card-default'

const Project = props => {
  return (
    <React.Fragment>
      <section className='section-project'>
        <ContentCardDefault data={data.filter(item => item.id === props.match.params.id)[0]} />
      </section>

      <section className='section-members'>
        <div className='members__title'>
          <h2 className='members__title-text'>Members</h2>
          <button className='members__title-button'>Add +</button>
        </div>
        <div className='members-persons'>
          <ul className='members-persons-items'>
            <li className='members-persons-item'><img src={require('../../assets/images/photo-3.jpg')} alt='perons' /></li>
            <li className='members-persons-item'><img src={require('../../assets/images/photo-2.jpg')} alt='perons' /></li>
            <li className='members-persons-item'><img src={require('../../assets/images/photo-3.jpg')} alt='persons' /></li>
            <li className='members-persons-item'><img src={require('../../assets/images/photo-2.jpg')} alt='persons' /></li>
            <li className='members-persons-item'><img src={require('../../assets/images/photo-3.jpg')} alt='persons' /></li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Project
