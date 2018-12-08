import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../styles/styles.js'

const Header = ({ title, subtitle }) => (
  <div css={styles.header}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

Header.defaultProps = {
  title: '',
  subtitle: ''
}

export default Header
