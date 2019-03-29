import React from "react"
import { graphql } from "gatsby"

import * as styles from '../styles/styles'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <CalcLayout title="Resources" extraStyles={[styles.resourcesHeader]}>
             <div css={[styles.container, styles.calcContainer, styles.resourceContainer]}>
                <h2>{post.frontmatter.title}</h2>
                {post.frontmatter.video && (
                    <div css={styles.resourceVideo}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${post.frontmatter.video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                )}

                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        video
      }
    }
  }
`