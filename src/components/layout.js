import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/normalize.css'

import Nav from './nav'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Short and to the point information on anything related to graphing calculators. Period. Tutorials, games, and more.' },
            { name: 'keywords', content: 'graphing calculator, texas instruments, ti-84, ti 84, ti 84 ce, ti 84 plus, ti 83, SAT, ACT' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Nav />
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
