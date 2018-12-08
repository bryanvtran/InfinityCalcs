import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as styles from '../styles/styles.js'
import heartIcon from '../images/heart.png'

const YouTubeImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "youtube.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} css={styles.youtubeImg}/>}
  />
)

const Footer = () => (
  <div css={{...styles.container, ...styles.footer}}>
    <hr css={styles.footerBar} />
    <hr css={styles.footerBarSmall} />
    <YouTubeImage />
    <p>
      &copy; 2018 Infinity Calcs | Made with <img src={heartIcon} alt="<3" css={styles.heartIcon}/>
    </p>
  </div>
)

export default Footer
