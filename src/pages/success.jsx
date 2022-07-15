import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Success = () => {
  return (
    <Wrapper>
      <section className="success-page">
        <div className="page-center">
          <h2>Thank you, we've received your message!</h2>
          <Link className="button-solid" href="/">
            Return Home
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .success-page {
    height: 70vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .page-center {
    box-shadow: 0 0 25px #33333330;
    padding: 1.5rem 1.2rem;
    border-radius: 15px;
    position: relative;
    
  }
`

export default Success
