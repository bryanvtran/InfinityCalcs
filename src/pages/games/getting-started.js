import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import CalcLayout from '../../components/calc-layout'

import * as styles from '../../styles/styles.js'

const GettingStarted = ({ data }) => (
    <Layout>
        <CalcLayout title="Starter's Guide for Games" titleHref="/games/" extraStyles={[styles.gameHeader]}>
          <div css={[styles.container, styles.calcContainer, styles.gameContainer]}>
            <h2>Getting Started</h2>
            <div css={styles.markdownStyles} dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }} />
          </div>
        </CalcLayout>
    </Layout>
)

export default GettingStarted

export const query = graphql`
{
  file (name: {eq: "games-getting-started"}) {
    childMarkdownRemark {
      html
    }
  }
}
`
