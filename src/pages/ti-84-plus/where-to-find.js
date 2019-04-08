import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import CalcLayout from '../../components/calc-layout'
import Definitions from '../../components/definitions'

import * as styles from '../../styles/styles.js'

const WhereToFind = ({data, ...props}) => {
    const terms = data.allMarkdownRemark.edges.sort(function (a, b) {
      return a.node.frontmatter.title.toLowerCase().localeCompare(b.node.frontmatter.title.toLowerCase());
    });

    const selectedLetter = props.location.search.split('?l=')[1];
  
    return (
        <Layout>
            <CalcLayout title="TI-84 Plus" titleHref="/ti-84-plus/">
                <div css={[styles.container, styles.calcContainer, styles.whereToFindContainer]}>
                    <h2>Where To Find…</h2>
                    <Definitions selected={selectedLetter} path={props.location.pathname} terms={terms} whereToFind={true} />
                </div>
            </CalcLayout>
        </Layout>
    )
}

export const query = graphql`
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___title], order: ASC },
    filter: { fileAbsolutePath: { regex: "/(ti-84-plus)/.*(.md)$/"}}
  ) {
    edges {
      node {
        html
        frontmatter {
          title
        }
      }
    }
  }
}
`

export default WhereToFind
