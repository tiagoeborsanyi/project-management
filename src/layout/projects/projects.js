import React from 'react'
import { Link } from 'react-router-dom'

import dataProjects from '../../fake-data/data-projects'
import Card from '../../components/card/card'
import ContentCardDefault from '../../components/card/content/content-card-default'

const Projects = props => {
  return (
    <React.Fragment>
      <section className='section-info-user'>
        <div className='info-user'>
          <p className='info-user__name'>Hi, Mike!</p>
          <h2 className='info-user__hello'>Good afternoon</h2>
          <p className='info-user__date'>03 September 2020</p>
        </div>
      </section>

      <section className='section-menu'>
        <div className='menu'>
          <ul className='menu__items'>
            <li className='menu__item'><Link to='/' className='menu__btn menu__btn-active'>Projects</Link></li>
            <li className='menu__item'><Link to='/' className='menu__btn'>Clients</Link></li>
            <li className='menu__item'><Link to='/' className='menu__btn'>Schedules</Link></li>
          </ul>
        </div>
      </section>

      <section className='section-card'>
        {dataProjects.map(data => (
          <Card key={data.id}>
            <ContentCardDefault data={data} />
          </Card>
        ))}
      </section>

    </React.Fragment>
  )
}

export default Projects
