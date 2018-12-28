import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

class DefinitionsList extends React.Component {
    constructor(props) {
        super(props)
        if (props.parameters.type === 'term') {
            this.state = {
                selected: props.parameters.letter,
                term: props.parameters.term
            }
        }
        else if (props.parameters.type === 'letter') {
            this.state = {
                selected: props.parameters.letter.toUpperCase(),
            }
        }
        else {
            this.state = {
                selected: 'ALL'
            }
        }
    }

    render() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        let arr = this.props.terms
        if (this.state.selected !== 'ALL') {
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.toUpperCase().startsWith(this.state.selected))
        }

        return (
            <>
                <div css={styles.definitionsNav}>
                    <ul>
                        {letters.map((letter, i) => (<li key={i}> <span css={this.state.selected === letter ? styles.selected : {}}><Link to={`${this.props.path}/${letter.toLowerCase()}`}>{letter}</Link></span> |</li>))}
                        <li css={{paddingLeft: 4}}><span css={this.state.selected === 'ALL' ? styles.selected : {}}><Link to={`${this.props.path}/`}>See all</Link></span></li>
                    </ul>
                </div>
                <div css={styles.definitionsList}>
                    <p className="title">{this.state.selected !== 'ALL' ? this.state.selected : 'All'}</p>
                    <ul>
                        {arr.length ? arr.map((term, i) => (
                            <li key={i} css={term.node.frontmatter.title.toLowerCase() === this.state.term ? [styles.definition, styles.showDefinition] : [styles.definition, styles.hideDefinition]}>
                                <div className="term">
                                    <Link to={term.node.frontmatter.title.toLowerCase() === this.state.term ? `${this.props.path}/${term.node.frontmatter.title[0].toLowerCase()}` : `${this.props.path}/${term.node.frontmatter.title[0].toLowerCase()}/${term.node.frontmatter.title.toLowerCase()}`}>{term.node.frontmatter.title}</Link>
                                </div>
                                <div className="definition" dangerouslySetInnerHTML={{ __html: term.node.html }}/>                         
                            </li>
                        )) : 'No terms found.'}
                    </ul>
                </div>
            </>
        )
    }
}

export default DefinitionsList
