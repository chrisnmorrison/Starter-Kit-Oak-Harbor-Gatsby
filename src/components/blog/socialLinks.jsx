import React from 'react'
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
} from 'react-icons/fa'
import styled from 'styled-components'

const SocialLinks = () => {
  return (
    <SocialLinksStyles>
      <ul className='nav-icons'>
        <li>
          <a href="https://twitter.com">
            <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FaDribbbleSquare className="social-icon dribble-icon"></FaDribbbleSquare>
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
          </a>
        </li>
      </ul>
    </SocialLinksStyles>
  )
}

const SocialLinksStyles = styled.div`
.nav-links {
  display: none;
}
.nav-icons {
  display: none;
}

.facebook-icon {
  color: #3b5998;
}
.twitter-icon {
  color: #00acee;
}
.dribble-icon {
  color: #ea4c89;
}
@media screen and (min-width: 800px) {
  .toggle-btn {
    display: none;
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
  }
  .page-link {
    margin-right: 1rem;
  }
  .page-link {
    color: var(--black);
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
    background: var(--primary-5);
    color: var(--primary-10);
  }
  .nav-icons {
    display: flex;
    justify-content: center;

    
  }
  .nav-icons .social-icon {
    font-size: 1.7rem;
    transition: var(--transition);
    margin: 0 0.5rem;

    
  }
  .nav-icons .social-icon:hover {
    color: var(--primary-5);
    transform: translateY(-5px);
  }
}
`

export default SocialLinks
