import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../styles/styles.js'

const SectionHeader = ({ title }) => (
  <h2 css={styles.sectionHeader}>
    {title}
  </h2>
)

SectionHeader.propTypes = {
  title: PropTypes.string,
}

SectionHeader.defaultProps = {
  title: '',
}


export default SectionHeader
