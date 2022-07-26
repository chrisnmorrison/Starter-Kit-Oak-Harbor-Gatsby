import React from 'react'
import {FaLeaf} from 'react-icons/fa'
import {GiGardeningShears} from 'react-icons/gi'
import {MdEvent} from 'react-icons/md'
import styled from 'styled-components'

const Services = () => {
  return (
    <Wrapper>
    <section id="services" className="services">
    <div className="card">
        <picture>
           <GiGardeningShears size={48} color="#fff"/>
        </picture>
        <h2>Gardens</h2>
        <p>
        At Terra, we take a cooperative approach. We develop the design concept together with our clients, tailoring the service according to their taste, needs and budget.
        </p>
    </div>
    <div className="card">
        <picture>
        <FaLeaf size={48} color="#fff"/>
        </picture>
        <h2>Maintenance</h2>
        <p>
        To further assist our clients with the upkeep of their gardens, we can also recommend landscape maintenance contractors and gardeners to help with regular garden care.
        </p>
    </div>
    <div className="card">
        <picture>
        <MdEvent size={48} color="#fff"/>
        </picture>
        <h2>Events</h2>
        <p>
        Events require careful planning. Our modern system turns time you spend preparing your event deco into time spent doing things that matter.
        </p>
    </div>
</section>
</Wrapper>
  )
}

const Wrapper = styled.div`
  p{
    color: #0c0c0c !important;
  }
`

export default Services