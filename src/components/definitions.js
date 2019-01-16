import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

class DefinitionsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'A',
            
        }
        this.setSelected = this.setSelected.bind(this)
    }

    setSelected(letter) {
        this.setState((state) => ({
            selected: letter
        }))
    }

    render() {
        // path prefix fix
        const split = this.props.path.split('/InfinityCalcs')
        const path = split[split.length-1]

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        const arr = this.props.terms.filter((term) => term.node.frontmatter.title.toUpperCase().startsWith(this.state.selected))

        return (
            <>
                <div css={styles.definitionsNav}>
                    <ul>
                        {letters.map((letter, i) => (<li key={i}> <span css={this.state.selected === letter ? styles.selected : {}} onClick={(e) => this.setSelected(letter)}>{letter}</span> |</li>))}
                        <li css={styles.textSmall}> <Link to={path+'/where-to-find/'}>See all</Link></li>
                    </ul>
                </div>
                <div css={styles.definitions}>
                    <p>{this.state.selected}</p>
                    <ul>
                        {arr.length ? arr.map((term, i) => (
                            <li key={i}><Link to={`${path}where-to-find/${term.node.frontmatter.title.toLowerCase()[0]}/${term.node.frontmatter.title.toLowerCase()}`}>{term.node.frontmatter.title}</Link></li>
                        )) : 'No terms found.'}
                    </ul>
                </div>
            </>
        )
    }
}

export default DefinitionsList
