import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

const GamesList = ({ games }) => (
    <ul css={styles.gamesList}>
        {games.sort((a, b) => (a.node.name > b.node.name) ? 1 : ((b.node.name > a.node.name) ? -1 : 0)).map(({node}) => (
            <li key={node.id} css={styles.gamesListItem}>
                <div css={[styles.gamesListItemCell, styles.bold]}>
                    {node.name}
                </div>
                <div css={styles.gamesListItemCell}>
                    Developer: Elon Musk
                </div>
                <div css={styles.gamesListItemCell}>
                    TI-84 CE
                </div>
                <div css={styles.gamesListItemCell}>
                    <a css={styles.button} href={node.publicURL} download={node.name}>Download</a>
                </div>
            </li>
        ))}
    </ul>
)

GamesList.propTypes = {
  games: PropTypes.array,
}

GamesList.defaultProps = {
  games: [],
}


export default GamesList
