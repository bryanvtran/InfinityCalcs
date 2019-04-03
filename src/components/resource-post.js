import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import * as styles from '../styles/styles'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'

export default ({ data }) => {
  const post = data.markdownRemark
  const meta = []
  if (post.frontmatter.description) {
    meta.push({name: 'description', content: post.frontmatter.description})
  }
  if (post.frontmatter.keywords) {
    meta.push({name: 'keywords', content: post.frontmatter.description})
  }
  return (
    <Layout>
        <CalcLayout title="Resources" titleHref="/resources/" extraStyles={[styles.resourcesHeader]}>
              <Helmet
                title={`${post.frontmatter.title} | Infinity Calcs`}
                meta={meta}
              >
              </Helmet>
             <div css={[styles.container, styles.calcContainer, styles.resourceContainer]}>
                <h2>{post.frontmatter.title}</h2>
                {post.frontmatter.video && (
                    <div css={styles.resourceVideo}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${post.frontmatter.video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                )}

                <div css={styles.markdownStyles} dangerouslySetInnerHTML={{ __html: post.html }} />
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
