import React from 'react'
import PropTypes from 'prop-types'
import { Link, withPrefix} from 'gatsby'

import * as styles from '../styles/styles.js'

const GamesList = ({ games }) => (
    <ul css={styles.gamesList}>
        {games.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).map((game, i) => (
            <li key={i} css={styles.gamesListItem}>
                <div css={[styles.gamesListItemCell, styles.bold]}>
                    {game.title}
                </div>
                <div css={styles.gamesListItemCell}>
                    Developer: {game.developer}
                </div>
                <div css={styles.gamesListItemCell}>
                    {game.calculator}
                </div>
                <div css={styles.gamesListItemCell}>
                    <a css={styles.button} href={withPrefix(`/games/${game.file}`)}>Download</a>
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
