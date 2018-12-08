import React from 'react'

import * as styles from '../styles/styles.js'
import youtubeLogo from '../images/youtube.png'
import heartIcon from '../images/heart.png'

const Footer = () => (
  <div css={{...styles.container, ...styles.footer}}>
    <hr css={styles.footerBar} />
    <hr css={styles.footerBarSmall} />
    <img src={youtubeLogo} alt="YouTube" css={styles.youtubeImg} />
    <p>
      &copy; 2018 Infinity Calcs | Made with <img src={heartIcon} alt="<3" css={styles.heartIcon}/>
    </p>
  </div>
)

export default Footer
