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
            { name: 'description', content: 'InfinityCalcs is the leading source online for information on graphing calculators. Tutorial videos, games, and more all from one site.' },
            { name: 'keywords', content: 'graphing calculator, ti-84, ti 84' },
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
