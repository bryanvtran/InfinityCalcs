import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

const GamesList = ({ games }) => (
    <ul css={styles.gamesList}>
        <li css={styles.gamesListItem}>
            <div css={[styles.gamesListItemCell, styles.bold]}>
                Pac-Man
            </div>
            <div css={styles.gamesListItemCell}>
                Developer: Jane Doe
            </div>
            <div css={styles.gamesListItemCell}>
                TI-84 PLUS, TI-84 CE
            </div>
            <div css={styles.gamesListItemCell}>
                <Link css={styles.button} to=''>Download</Link>
            </div>
        </li>
        <li css={styles.gamesListItem}>
            <div css={[styles.gamesListItemCell, styles.bold]}>
                Pac-Man
            </div>
            <div css={styles.gamesListItemCell}>
                Developer: Jane Doe
            </div>
            <div css={styles.gamesListItemCell}>
                TI-84 PLUS, TI-84 CE
            </div>
            <div css={styles.gamesListItemCell}>
                <Link css={styles.button} to=''>Download</Link>
            </div>
        </li>
        <li css={styles.gamesListItem}>
            <div css={[styles.gamesListItemCell, styles.bold]}>
                Pac-Man
            </div>
            <div css={styles.gamesListItemCell}>
                Developer: Jane Doe
            </div>
            <div css={styles.gamesListItemCell}>
                TI-84 PLUS, TI-84 CE
            </div>
            <div css={styles.gamesListItemCell}>
                <Link css={styles.button} to=''>Download</Link>
            </div>
        </li>
        <li css={styles.gamesListItem}>
            <div css={[styles.gamesListItemCell, styles.bold]}>
                Pac-Man
            </div>
            <div css={styles.gamesListItemCell}>
                Developer: Jane Doe
            </div>
            <div css={styles.gamesListItemCell}>
                TI-84 PLUS, TI-84 CE
            </div>
            <div css={styles.gamesListItemCell}>
                <Link css={styles.button} to=''>Download</Link>
            </div>
        </li>
        <li css={styles.gamesListItem}>
            <div css={[styles.gamesListItemCell, styles.bold]}>
                Pac-Man
            </div>
            <div css={styles.gamesListItemCell}>
                Developer: Jane Doe
            </div>
            <div css={styles.gamesListItemCell}>
                TI-84 PLUS, TI-84 CE
            </div>
            <div css={styles.gamesListItemCell}>
                <Link css={styles.button} to=''>Download</Link>
            </div>
        </li>
    </ul>
)

GamesList.propTypes = {
  games: PropTypes.array,
}

GamesList.defaultProps = {
  games: [],
}


export default GamesList
