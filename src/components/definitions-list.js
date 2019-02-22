import React from 'react'
import { Link } from "gatsby"

import Definition from './definition'

import * as styles from '../styles/styles.js'

class DefinitionsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pathname: props.location.pathname,
            search: props.location.search ? props.location.search.split('?search=')[1] : '',
        }
        this.updateTermState = this.updateTermState.bind(this);
    }

    updateTermState(props) {
        const search = props.location.search ? props.location.search.split('?search=')[1] : ''

        this.setState({
            search: search,
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.updateTermState(this.props);
        }
    }

    render() {
        let currentLetter = (this.state.search && this.state.search[0].toUpperCase()) || 'All'
        if (currentLetter !== '@' && currentLetter.match(/^\W/)) {
            currentLetter = '*'
        } else if (currentLetter.match(/^\d/)) {
            currentLetter = '@'
        }
        const currentLetterTitle = currentLetter === '*' ? 'Operations' : currentLetter === '@' ? '#' : currentLetter

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        // show all by default
        let arr = this.props.terms

        if (currentLetter === '*') {
            // starts with an op (anything not an number or letter)
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.match(/^\W/))
        }
        else if (currentLetter === '@') {
            // starts with a number
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.match(/^\d/))
        }
        else if (currentLetter !== 'All') {
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.toUpperCase().startsWith(currentLetter))
        }

        return (
            <>
                <div css={styles.definitionsNav}>
                    <ul>
                        <li><span css={currentLetter === '*' && styles.selected}><Link to={`${this.state.pathname}?search=*`}>Operations</Link></span> |</li>
                        <li> <span css={currentLetter === '@' && styles.selected}><Link to={`${this.state.pathname}?search=@`}>#</Link></span> |</li>
                        {letters.map((letter, i) => (<li key={i}> <span css={currentLetter === letter && styles.selected}><Link to={`${this.state.pathname}?search=${letter}`}>{letter}</Link></span> |</li>))}
                        <li css={{paddingLeft: 4}}><span css={currentLetter === 'All' && styles.selected}><Link to={this.state.pathname}>See all</Link></span></li>
                    </ul>
                </div>
                <div css={styles.definitionsList}>
                    <p className="title">{currentLetterTitle}</p>
                    <ul>
                        {arr.length ? arr.map((term, i) => (
                            <Definition key={i} term={term} opened={decodeURIComponent(this.state.search.toLowerCase()) === term.node.frontmatter.title.toLowerCase()} />
                        )) : 'No terms.'}
                    </ul>
                </div>
            </>
        )
    }
}

export default DefinitionsList
