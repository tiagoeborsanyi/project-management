/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Header = props => {
  return (
    <header className='header'>
      <img src={require('../../assets/images/icon-quad.png')} alt='icon menu quad' className='header__menu' />
      <img src={require('../../assets/images/photo-1.jpg')} alt='photo avatar' className='header__avatar' />
    </header>
  )
}

export default Header
