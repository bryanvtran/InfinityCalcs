import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

const CalcLayout = ({ title, children, titleHref, extraStyles }) => (
  <>
    <div css={[styles.calcHeader, ...extraStyles]}>
      <h1>{titleHref ? (<Link css={styles.clearLink} to={titleHref}>{title}</Link>) : title}</h1>
    </div>
    {children}
  </>

)

CalcLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    titleHref: PropTypes.string,
    extraStyles: PropTypes.array,
}

export default CalcLayout
