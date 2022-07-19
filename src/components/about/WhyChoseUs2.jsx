import React from 'react'
import styled from 'styled-components'
import house from '../../assets/happy-house.png'
import supplier from '../../assets/supplier.png'

const Vision = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="title">
            <h3></h3>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .sec-title .title-icon {
    position: absolute;
    left: 20px;
    top: 32px;
  }
  .sec-title::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 3px;
    width: 40px;
    height: 65px;
    background: #24a77e;
  }
`

export default Vision
