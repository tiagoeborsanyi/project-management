/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Header = props => (
    <header className='header'>
      {props.match.isExact ?
      <img src={require('../../assets/images/icon-quad.png')} alt='icon menu quad' className='header__menu' /> :
      <Link to='/' className='header__link'><img src={require('../../assets/images/icon-back.png')} alt='icon menu quad' className='header__menu' /></Link>}
      <img src={require('../../assets/images/photo-1.jpg')} alt='photo avatar' className='header__avatar' />
    </header>
  )

export default withRouter(Header)
