import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'
import GamesList from '../components/games-list'

import * as styles from '../styles/styles.js'

const Games = ({data}) => (
    <Layout>
        <CalcLayout title="Games" extraStyles={[styles.gameHeader]}>
            <div css={[styles.container, styles.calcContainer, styles.gameContainer]}>
                <h2>Getting Started</h2>
                <p className="body">Take a look at the guide below if you need some help on getting games on your graphing calculator.</p>
                <div css={styles.center}>
                <Link css={[styles.link, styles.bold, styles.linkGreen]} to='/games/getting-started/'>How To Install Games</Link>
                </div>
            </div>
            <div css={[styles.container, styles.calcContainer, styles.gameContainer]}>
                <h2>Popular Games</h2>
                <GamesList games={data.allFile.edges}/>
            </div>
        </CalcLayout>
    </Layout>
)

export default Games

export const query = graphql`
{
  allFile(filter: { sourceInstanceName: { eq: "games" } }) {
    edges {
      node {
        id,
        name,
        extension
        publicURL,
      }
    }
  }
}
`
