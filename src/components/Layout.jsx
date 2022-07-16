
import React from 'react'
import Navbar from './Navbar'
import Seo from './SEO'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import Head from './Head'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head/>
      <Seo />
       <MobileMenu isOpen={isOpen} toggle={toggle} /> 
       <Navbar toggle={toggle} /> 
       <main>{children}</main> 
       <Footer />

    </>
  )
}


export default Layout
