/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import navJS from '../../static/js/nav'
// import darkJS from '../../static/js/dark'
import { Helmet } from 'react-helmet'
import React from 'react'
import Navbar from './Navbar'
import SEO from './SEO'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import siteIcon from '../assets/gatsby-icon.png'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Helmet>
      <link rel="icon" type="image/png" href={siteIcon} sizes="16x16" alt='Site icon' />
      
      </Helmet>
      <SEO />
       <MobileMenu isOpen={isOpen} toggle={toggle} /> 
       <Navbar toggle={toggle} /> 
       <main>{children}</main> 
       <Footer />

    </>
  )
}

// export const FooterScripts = () => {
//   return (
//     <>

//       <script defer>
//         {document.addEventListener('scroll', e => {
//           const scroll = document.documentElement.scrollTop
//           if (scroll >= 100) {
//             document.querySelector('body').classList.add('scroll')
//           } else {
//             document.querySelector('body').classList.remove('scroll')
//           }
//         })}
//       </script>
//     </>
//   )
// }

export default Layout
