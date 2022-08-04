import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Cta2 = () => {
  return (
    <Wrapper>
      <section className="cta-contact">
        <div className="contact-group container">
          <h2>Questions? Get in touch today.</h2>
          <Link className="button-solid" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  

  .cta-contact {
    background: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 210px;
  }

  .cta-contact:before {
    content: "";
    display: block;
    height: 200px;
    width: 100%;
    background: var(--primary);
    clip-path: polygon(0 85%, 0 100%, 100% 100%, 100% 85%, 50% 97%);
    position: absolute;
    top: -199px;
  }

  .contact-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 730px;
  }

  @media screen and (max-width: 882px){
    .contact-group{
      flex-direction: column;
      width: 100%;
      text-align: center;
    }

    h2{
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 882px){

    h2{
      font-size: 1.3rem;
    }
  }
`

export default Cta2
