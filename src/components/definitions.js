import React from 'react'
import { Link } from 'gatsby'

import DefinitionsList from '../components/definitions-list'
import * as styles from '../styles/styles.js'

class Definitions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: props.whereToFind ? props.selected || 'All' : props.selected || 'Operations'
        }
        this.setSelected = this.setSelected.bind(this)
    }

    setSelected(letter) {
        this.setState((state) => ({
            selected: letter
        }))
    }

    render() {
        const currentLetterTitle = this.state.selected

        // path prefix fix
        const split = this.props.path.split('/InfinityCalcs')
        const path = split[split.length-1]

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

        if (!this.props.headerOnly) {
            // show all by default
            let arr = this.props.terms

            if (this.state.selected === 'Operations') {
                // starts with an op (anything not an number or letter)
                arr = this.props.terms.filter((term) => term.node.frontmatter.title.match(/^\W/))
            }
            else if (this.state.selected === 'Numbers') {
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
                            <li><span css={this.state.selected === 'Operations' && styles.selected} onClick={(e) => this.setSelected('Operations')}><Link to={`${this.props.path}?l=Operations`} replace>Operations</Link></span> |</li>
                            <li> <span css={this.state.selected === 'Numbers' && styles.selected} onClick={(e) => this.setSelected('Numbers')}><Link to={`${this.props.path}?l=Numbers`} replace>#</Link></span> |</li>
                            {letters.map((letter, i) => (<li key={i}> <span css={this.state.selected === letter && styles.selected} onClick={(e) => this.setSelected(letter)}><Link to={`${this.props.path}?l=${letter}`} replace>{letter}</Link></span> |</li>))}
                            <li css={styles.textSmall}> <span css={this.state.selected === 'All' && styles.selected} onClick={(e) => this.setSelected('All')}><Link to={this.props.whereToFind ? path : `${path}/where-to-find/`} replace>See all</Link></span></li>
                        </ul>
                    </div>
                    <div css={styles.definitions}>
                        <DefinitionsList whereToFind={this.props.whereToFind} path={this.props.path} letter={currentLetterTitle} terms={arr}/>
                    </div>
                </>
            )
        }
        else {
            const [, calc, wheretofind] = this.props.path.split('/')
            console.log(this.props.selected);
            const path = `/${calc}/${wheretofind}/`
            return (
                    <div css={styles.definitionsNav}>
                        <ul>
                            <li><span css={this.state.selected === 'Operations' && styles.selected} onClick={(e) => this.setSelected('Operations')}><Link to={`${path}?l=Operations`}>Operations</Link></span> |</li>
                            <li> <span css={this.state.selected === 'Numbers' && styles.selected} onClick={(e) => this.setSelected('Numbers')}><Link to={`${path}?l=Numbers`}>#</Link></span> |</li>
                            {letters.map((letter, i) => (<li key={i}> <span css={this.state.selected === letter && styles.selected} onClick={(e) => this.setSelected(letter)}><Link to={`${path}?l=${letter}`}>{letter}</Link></span> |</li>))}
                            <li css={styles.textSmall}> <span css={this.state.selected === 'All' && styles.selected} onClick={(e) => this.setSelected('All')}><Link to={path}>See all</Link></span></li>
                        </ul>
                    </div>
            )
        }

    }
}

export default Definitions
