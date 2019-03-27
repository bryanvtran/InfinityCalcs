import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'
import logo from '../images/logo.png'

import Dropdown from './dropdown'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState(state => ({
      open: !state.open
    }))
  }

  render() {
    return (
      <div css={this.state.open ? [styles.nav, styles.navOpen] : styles.nav}>
        <Link to="/">
            <img src={logo} alt="Infinity Calcs" css={this.state.open ? [styles.navLogo, styles.navLogoInvert] : styles.navLogo} />
        </Link>
        <div onClick={this.handleClick} css={this.state.open ? [styles.hamburger, styles.hamburgerOpen] : styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul css={this.state.open ? [styles.navLinks, styles.navLinksMobile, styles.navLinksMobileOpen] : [styles.navLinks, styles.navLinksMobile]}>
          <li>
            <Dropdown title="Calculators">
              <Link to="/ti-84-plus/">TI-84 Plus</Link>
              <Link to="/ti-84-ce/">TI-84 CE</Link>
              <Link to="/ti-83-plus/">TI-83 Plus</Link>
              <Link to="/ti-89-titanium/">TI-89</Link>
            </Dropdown>
          </li>
          <li>
            <Link to="/resources/">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/games/">
              Games
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
