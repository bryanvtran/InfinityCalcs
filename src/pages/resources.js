import React from 'react'
import { Link, graphql } from "gatsby"

import * as styles from '../styles/styles'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'
import ResourcesItem from '../components/resources-item'

const ResourcesPage = ({ data }) => (
  <Layout>
        <CalcLayout title="Resources" description="Graphing calculator articles, step by step tutorials and more." extraStyles={[styles.resourcesHeader]}>
            <div css={[styles.container, styles.calcContainer]}>
                <h2>Popular Topics</h2>
                <div>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <ResourcesItem key={node.id}
                            image={node.frontmatter.image.childImageSharp.resize.src}
                            title={node.frontmatter.title}
                            slug={node.fields.slug} />
                    ))}
                </div>
            </div>
        </CalcLayout>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {fields: { sourceInstanceName: { eq: "resources" }}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image {
                childImageSharp {
                    resize(width: 300) {
                    src
                    }
                }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default ResourcesPage
