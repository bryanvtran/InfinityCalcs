import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'
import GamesList from '../components/games-list'
import games from '../data/games.js'

import * as styles from '../styles/styles.js'

const Games = () => (
    <Layout>
        <CalcLayout title="Download Free TI-84 Games: PacMan | Mario | Tetris" description="Download Free TI-84 Games: PacMan | Mario | Tetris" keywords="games,ti-84" extraStyles={[styles.gameHeader]}>
            <div css={[styles.container, styles.calcContainer, styles.gameContainer]}>
                <h2>Getting Started</h2>
                <p className="body">Take a look at the guide below if you need some help on getting games on your graphing calculator.</p>
                <div css={styles.center}>
                <Link css={[styles.link, styles.bold, styles.linkGreen]} to='/games/getting-started/'>How To Install Games</Link>
                </div>
            </div>
            <div css={[styles.container, styles.calcContainer, styles.gameContainer]}>
                <h2>Popular Games</h2>
                <GamesList games={games}/>
            </div>
        </CalcLayout>
    </Layout>
)

export default Games