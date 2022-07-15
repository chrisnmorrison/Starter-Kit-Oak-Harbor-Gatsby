import React from 'react'
import { Link } from 'gatsby'
import NavLinks from './utils/NavLinks'
import styled from 'styled-components'
import logoDark from '../assets/logo_transparent.png'
import logoLight from '../assets/logo_transparent_light.png'
import { CgMenuLeft } from 'react-icons/cg'

const Navbar = ({ toggle }) => {
  return (
    <>
      <div id="navigation">
        <div aria-hidden="true" className="background-color-div"></div>
        <div className="container">
          <Link className="logo" aria-label="click to go to home page" to="/">
            <img
              className="light"
              aria-hidden="true"
              src={logoLight}
              decoding="async"
              alt="logo"
              width={745}
              height={268}
            />
            <img
              className="dark"
              aria-hidden="true"
              src={logoDark}
              decoding="async"
              loading="lazy"
              alt="logo"
              width={221}
              height={66}
            />
          </Link>
          <nav id="navbar-menu">
            <ul>
              <NavLinks />
            </ul>
          </nav>

          <button className="toggle-btn hamburger-menu" onClick={toggle}>
            <CgMenuLeft size={28} />
          </button>
          {/* <button id="dark-mode-toggle">
            <svg
              className="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              style={{ enableBackground: 'new 0 0 480 480' }}
              xmlSpace="preserve"
            >
              <path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z" />
            </svg>
            <img
              className="sun"
              aria-hidden="true"
              src="/images/sun.svg"
              decoding="async"
              alt="moon"
              width={15}
              height={15}
            />
          </button> */}
        </div>
      </div>
    </>
  )
}

export const NavbarStyles = styled.div`
  /*
===============
Navbar
===============
*/
  .navbar {
    width: 100%;
    height: 6.25em;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200000;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  ul {
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-logo {
    display: block;
    height: 40px;
  }
  .nav-logo img {
    height: 100%;
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
  }
  .toggle-btn:hover {
    color: var(--clr-primary-3);
  }
  .nav-links {
    display: none;
  }

  @media screen and (min-width: 800px) {
    .toggle-btn {
      display: none;
    }

    .bmc-lg {
      height: 40px;
      width: auto;
      display: block;
      border-radius: 8px;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      column-gap: 2rem;
      align-items: center;
    }
    .nav-links {
      display: flex;
      align-items: center;
      margin: 0 auto;
    }
    .page-link {
      margin-right: 1rem;
    }
    .page-link {
      color: var(--clr-black);
      font-weight: 500;
      letter-spacing: var(--spacing);
      font-size: 1rem;
      transition: var(--transition);
      font-family: var(--ff-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
    }
    .page-link:hover {
      background: var(--clr-primary-5);
      color: var(--clr-primary-10);
    }
    .nav-icons {
      display: flex;
      justify-content: space-between;
    }
    .nav-icons .social-icon {
      font-size: 1.5rem;
      transition: var(--transition);
      margin-left: 0.5rem;
    }
    .nav-icons .social-icon:hover {
      color: var(--clr-primary-5);
      transform: translateY(-5px);
    }
  }
  .toggle-btn > svg:nth-child(1) {
    height: auto;
    width: 3rem;
  }
`

export default Navbar
