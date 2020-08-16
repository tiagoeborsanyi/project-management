import React from 'react'

const Footer = props => (
  <React.Fragment>
    <div className='footer__col'>
      <span className="material-icons footer__icon">folder</span>
      <p className='footer__text'>File(30)</p>
    </div>
    <ul className='footer__items'>
      <li className='footer__item'><span className="material-icons footer__icon">text_snippet</span></li>
      <li className='footer__item'><span className="material-icons footer__icon">forum</span></li>
      <li className='footer__item'><span className="material-icons footer__icon">settings</span></li>
    </ul>
  </React.Fragment>
)

export default Footer
