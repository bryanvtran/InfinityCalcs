import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'
import Definitions from './definitions'
import Definition from './definition'

import * as styles from '../styles/styles.js'

const DefinitionPage = ({ data, ...props}) => {
    const term = data.markdownRemark
    return (
        <Layout>
            <CalcLayout title="TI-84 Plus" titleHref="/ti-84-plus/">
                <div css={[styles.container, styles.calcContainer, styles.whereToFindContainer]}>
                    <h2>Where To Find…</h2>
                    <Definitions path={props.location.pathname} headerOnly={true} selected={term.frontmatter.title.toUpperCase()[0]}/>
                    <Definition term={term} />
                </div>
            </CalcLayout>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`


export default DefinitionPage