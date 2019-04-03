import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

const CalcLayout = ({ title, description, keywords, children, titleHref, extraStyles }) => {
  const meta = []
  if (description) {
    meta.push({name: 'description', content: description})
  }
  if (keywords) {
    meta.push({name: 'keywords', content: keywords})
  }
  return (
    <>
      {title && (
        <Helmet
          title={`${title} | Infinity Calcs`}
          meta={meta}
        >
        </Helmet>
      )}
      <div css={[styles.calcHeader, ...extraStyles]}>
        <h1>{titleHref ? (<Link css={styles.clearLink} to={titleHref}>{title}</Link>) : title}</h1>
      </div>
      {children}
    </>
  )
}

CalcLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    titleHref: PropTypes.string,
    extraStyles: PropTypes.array,
}

export default CalcLayout
