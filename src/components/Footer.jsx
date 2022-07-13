import React from 'react'
import styled from 'styled-components'
import logoLight from '../assets/logo_transparent_light.png'
import NavLinks from './utils/NavLinks'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <FooterStyles id="footer">
      <div className="container">
        <div className="left-section">
          <Link className="logo" to="/">
            <img
              loading="lazy"
              decoding="async"
              src={logoLight}
              alt="logo"
              width="264"
              height="78"
            />
          </Link>
          <p>
            Proudly serving North Grenville since 1991.
          </p>
        </div>
        <div className="right-section">
          <div className="lists">
            <ul className='footer-links'>
              <h2>Information</h2>
              <NavLinks className="page-link"/>
            </ul>
            <ul>
              <h2>Services</h2>
              <li>Terrain Modification</li>
              <li>Custom Gardens</li>
              <li>Property Maintenance</li>
              <li>Special Event Plants</li>
              <li>Pathways & Patios</li>
              <li>Hedges</li>
            </ul>
            <ul>
              <h2>Contact</h2>
              <li>
                <a href="/contact.html">
                  123 Address St
                  <br />
                  Kemptville, ON, K0K 0K0
                </a>
              </li>
              <li>
                <a href="tel:613-555-5555">📞 : (613) 555-5555</a>
              </li>
              <li>
                <a href="mailto:email@email.com">📧 : email@email.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="credit">
        <span>Developed by</span>{' '}
        <a href="https://mesmerdesign.ca" target="_blank" rel="noopener">
          Mesmer Design
        </a>
        {'. '}
        <span className="copyright">
          {' '}
          &copy; 2020 - {new Date().getFullYear()}
        </span>
      </div>
    </FooterStyles>
  )
}

export const FooterStyles = styled.footer`
  .footer-links li {
    list-style: none;
    margin-bottom: 0.66666667em;
    color: #fff;
    font-size: 105% !important;
    opacity: 0.9;
  }
`

export default Footer
