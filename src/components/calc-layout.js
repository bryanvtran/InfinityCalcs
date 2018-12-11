import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../styles/styles.js'

const CalcLayout = ({ title, children }) => (
  <>
    <div css={styles.calcHeader}>
      <h1>{title}</h1>
    </div>
    {children}
  </>

)

CalcLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default CalcLayout
