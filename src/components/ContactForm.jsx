import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
  return (
    <Wrapper>
      <div>
        <section className="get-in-touch">
          <h1 className="title">Get in touch</h1>
          <p className="note subtitle">Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          <form className="contact-form-styles contact-row">
            <div className="form-field col x-50">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="name">
                Name
              </label>
            </div>
            <div className="form-field col x-50">
              <input
                id="email"
                className="input-text js-input"
                type="email"
                required
              />
              <label className="label" htmlFor="email">
                E-mail
              </label>
            </div>
            <div className="form-field col x-100">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="message">
                Message
              </label>
            </div>
            <div className="form-field submit col x-100 align-center">
              <a
                className="button-solid"
                type="submit"
                defaultValue="Submit"
              >Send</a>
            </div>
          </form>
          <p className="note">
            Powered by {" "}
            <a
              className="link"
              href="https://www.staticforms.xyz/"
              target="blank"
            >
              Static Forms
            </a>. </p>
            <p className="note">Your information is not stored, per <a href="https://www.staticforms.xyz/privacy" target="_blank" rel="noopener noreferrer">Static Form's Privacy Policy</a>. It is only forwarded to our email, <a href="mailto:email@email.com">email@email.com</a>.</p>
         
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .align-center {
    text-align: center;
  }

  .subtitle{
    padding: 1.5rem 0 2.5rem;
  }

  // Grid
  .contact-row {
    margin: -20px 0;
    .col {
      padding: 0 20px;
      float: left;
      box-sizing: border-box;
      &.x-50 {
        width: 50%;
      }
      &.x-100 {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .contact-row .col.x-50 {
    width: 100%;
  }
}

@media only screen and (max-width: 398px) {
    .contact-row {
    padding: 0 5vw;
    display: block;
  }
}

  .content-wrapper {
    min-height: 100%;
    position: relative;
  }

  .get-in-touch {
    max-width: 650px;
    margin: 5rem auto;
    position: relative;
    display: block;
    font-family: var(--ff-primary), sans-serif;

    .title {
      text-align: center;
      font-family: var(--ff-primary), sans-serif;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 36px;
      line-height: 48px;
      /* padding-bottom: 48px; */
    }
  }

  .contact-form-styles {
    .form-field {
      position: relative;
      margin: 32px 0;
      
    }
    .input-text {
      display: block;
      width: 100%;
      height: 36px;
      border-width: 0 0 2px 0;
      border-radius: 0px;
      border-color: var(--primary-6);
      font-family: var(--ff-primary), sans-serif;
      font-size: 18px;
      line-height: 26px;
      font-weight: 400;
      background-color: transparent;

      &:focus {
        outline: none;
      }

      &:focus,
      &.not-empty {
        + .label {
          transform: translateY(-24px);
        }
      }
    }
    .label {
      position: absolute;
      left: 20px;
      bottom: 11px;
      font-size: 18px;
      line-height: 26px;
      font-weight: 400;
      color: #888;
      cursor: text;
      transition: transform 0.2s ease-in-out;
    }

    
  }

  .note {
    width: 100%;
    text-align: center;
    line-height: 21px;

  }

  @media only screen and (max-width: 690px) {
    .note{
        padding: 0 5vw;
    }
}

.contact-btn{
    padding: 1rem 2rem;
}
@media only screen and (max-width: 767px) {
    .submit{
        margin-bottom: 5rem !important;
    }
}
`

export default ContactForm
