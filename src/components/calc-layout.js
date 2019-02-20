import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../styles/styles.js'

const CalcLayout = ({ title, children, extraStyles }) => (
  <>
    <div css={[styles.calcHeader, ...extraStyles]}>
      <h1>{title}</h1>
    </div>
    {children}
  </>

)

CalcLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    extraStyles: PropTypes.array,
}

export default CalcLayout
