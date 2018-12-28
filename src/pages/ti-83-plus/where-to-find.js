import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import CalcLayout from '../../components/calc-layout'
import DefinitionsList from '../../components/definitions-list'

import * as styles from '../../styles/styles.js'

const WhereToFind = ({data, ...props}) => {
    const terms = data.allMarkdownRemark.edges.sort(function (a, b) {
      return a.node.frontmatter.title.toLowerCase().localeCompare(b.node.frontmatter.title.toLowerCase());
    });
    const subpath = '/ti-83-plus/where-to-find'
    const path = props.location.pathname.split('/')
    let parameters
    if (path.length === 5 || path.length === 6) {
      // if path size is 5, then we are on a term
      parameters = {
        type: 'term',
        letter: path[3],
        term: path[4]
      }
    }
    else if (path.length === 4 && path[3]) {
      // if 4, then we are on a letter
      parameters = {
        type: 'letter',
        letter: path[3]
      }
    }
    else {
      // if 3 or not any of the above, just show all
      parameters = {
        type: 'all'
      }
    }

   
    
    return (
        <Layout>
            <CalcLayout title="TI-83 Plus">
                <div css={[styles.container, styles.calcContainer, styles.whereToFindContainer]}>
                    <h2>Where To Find…</h2>
                    <DefinitionsList path={subpath} terms={terms} parameters={parameters} />
                </div>
            </CalcLayout>
        </Layout>
    )
}

export const query = graphql`
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___title], order: ASC },
    filter: { fileAbsolutePath: { regex: "/(ti-83-plus)/.*(.md)$/"}}
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
