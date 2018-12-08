import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const CalcLink = ({ title, href, color }) => (
  <Link to={href} css={color}>
    {title}
  </Link>
)

CalcLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.object
}

CalcLink.defaultProps = {
  title: '',
  href: '',
  color: {}
}


export default CalcLink
