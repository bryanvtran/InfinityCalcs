import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles'

import Layout from '../components/layout'
import Header from '../components/header'

const IndexPage = () => (
  <Layout>
    <Header title="Graphing Calculator Help" subtitle="Tutorials | Programming | Community"/>
    <div css={styles.container}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
