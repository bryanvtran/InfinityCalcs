import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

const ResourcesItem = ({ image, title, slug }) => {
    return (
        <Link to={`resources${slug}`} css={styles.resourcesItem}>
            <div css={styles.resourcesItemImage}>
                <img src={image} alt={title} />
            </div>
            <div css={styles.resourcesItemTitle}>
                {title}
            </div>
        </Link>
    )
}

ResourcesItem.propTypes = {
  post: PropTypes.object,
}

export default ResourcesItem
