import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.png'
import * as styles from '../styles/styles.js'

const Nav = () => (
  <div css={styles.nav}>
    <Link to="/">
      <img src={logo} alt="InfinityCalcs" css={styles.navLogo} />
    </Link>
    <ul css={styles.navLinks}>
      <li>
        <Link to="/">
          Calculators
        </Link>
      </li>
      <li>
        <Link to="/">
          Forum
        </Link>
      </li>
      <li>
        <Link to="/">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/">
          Games
        </Link>
      </li>
    </ul>
  </div>
)

export default Nav
