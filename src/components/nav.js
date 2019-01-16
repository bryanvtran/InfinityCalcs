import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'
import logo from '../images/logo.png'
import logoWhite from '../images/logo-white.png'

import Dropdown from './dropdown'

const Nav = () => (
  <div css={styles.nav}>
    <Link to="/">
      <img src={logo} alt="InfinityCalcs" css={styles.navLogo} />
      <img src={logoWhite} alt="InfinityCalcs" css={[styles.navLogo, styles.navLogoMobile]} />
    </Link>
    <ul css={[styles.navLinks, styles.navLinksMobile]}>
      <li>
        <Dropdown title="Calculators">
          <Link to="/ti-84-plus/">TI-84 Plus</Link>
          <Link to="/ti-84-ce/">TI-84 CE</Link>
          <Link to="/ti-83-plus/">TI-83 Plus</Link>
          <Link to="/ti-89-titanium/">TI-89</Link>
        </Dropdown>
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
