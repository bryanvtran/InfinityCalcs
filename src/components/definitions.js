import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

class DefinitionsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '*',
        }
        this.setSelected = this.setSelected.bind(this)
    }

    setSelected(letter) {
        this.setState((state) => ({
            selected: letter
        }))
    }

    render() {
        const currentLetterTitle = this.state.selected === '*' ? 'Operations' : this.state.selected === '@' ? '#' : this.state.selected

        // path prefix fix
        const split = this.props.path.split('/InfinityCalcs')
        const path = split[split.length-1]

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

        // show all by default
        let arr = this.props.terms

        if (this.state.selected === '*') {
            // starts with an op (anything not an number or letter)
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.match(/^\W/))
        }
        else if (this.state.selected === '@') {
            // starts with a number
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.match(/^\d/))
        }
        else if (this.state.selected !== 'All') {
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.toUpperCase().startsWith(this.state.selected))
        }

        return (
            <>
                <div css={styles.definitionsNav}>
                    <ul>
                        <li><span css={this.state.selected === '*' && styles.selected} onClick={(e) => this.setSelected('*')}>Operations</span> |</li>
                        <li> <span css={this.state.selected === '@' && styles.selected} onClick={(e) => this.setSelected('@')}>#</span> |</li>
                        {letters.map((letter, i) => (<li key={i}> <span css={this.state.selected === letter && styles.selected} onClick={(e) => this.setSelected(letter)}>{letter}</span> |</li>))}
                        <li css={styles.textSmall}> <Link to={path+'/where-to-find/'}>See all</Link></li>
                    </ul>
                </div>
                <div css={styles.definitions}>
                    <p>{currentLetterTitle}</p>
                    <ul>
                        {arr.length ? arr.map((term, i) => (
                            <li key={i}><Link to={`${path}where-to-find/?search=${term.node.frontmatter.title}`}>{term.node.frontmatter.title}</Link></li>
                        )) : 'No terms.'}
                    </ul>
                </div>
            </>
        )
    }
}

export default DefinitionsList
