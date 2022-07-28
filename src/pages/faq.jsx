import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import { Link } from 'gatsby'
import InnerHero from '../components/hero/InnerHero'
import Cta from '../components/cta/cta1'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from 'styled-components'

const questions = [
  {
    question: 'How do you determine a quote?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'Where are you located?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
]

const Faq = () => {
  return (
    <Layout>
      <Seo title="FAQ" description="Answers to common questions we recieve" />
      <InnerHero pageName="FAQ" />
      <FaqSection />
      <Cta />
    </Layout>
  )
}

const FaqSection = () => {
  return (
    <Wrapper>
      <h2 className="page-info">Frequently Asked Questions</h2>
      <p className="page-info">
        Here are the most commonly asked questions we recieve. If you don't see
        yourt question on this list, don't hesistate to{' '}
        <Link to="/contact">react out to us</Link>.
      </p>
      {questions.map((item,i) => {
        i = i+1;
        return (
          <Accordion>
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"question " + i + " title: " + item.question}
              id={"question" + i + "title"}
            >
              <h3 className="dark-mode-font-faq faq-accordion-header">
                {item.question}
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p className="dark-mode-font-faq">{item.answer}</p>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem auto;
  width: 1200px;
  font-family: var(--primary-font) !important;

  .page-info {
    margin-bottom: 1.5rem;
  }

  .faq-accordion-header {
    font-size: 120%;
    font-weight: 500;
  }
`

export default Faq
