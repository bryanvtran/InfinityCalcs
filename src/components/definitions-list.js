import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

class DefinitionsList extends React.Component {
    constructor(props) {
        super(props)

        // path prefix fix
        const path = this.props.path.split('/InfinityCalcs')
        const subpath = path[path.length-1] 
        let split = subpath.split('/where-to-find/')
        split = split[split.length-1].split('/')
        if (!split[split.length-1]) {
            split.pop()
        }

        let parameters
        if (split.length === 2) {
            // if path size is 5, then we are on a term
            parameters = {
                selected: split[0].toUpperCase(),
                term: split[1]
            }
        }
        else if (split.length === 1 && split[0]) {
            // if 4, then we are on a letter
            parameters = {
                selected: split[0].toUpperCase()
            }
        }
        else {
            // if 3 or not any of the above, just show all
            parameters = {
                selected: 'ALL'
            }
        }

        const subpath2 = subpath.split('where-to-find')[0]

        this.state = {
            subpath: `${subpath2}where-to-find`,
            ...parameters
        }
    }

    render() {
        const subpath = this.state.subpath

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        let arr = this.props.terms
        if (this.state.selected !== 'ALL') {
            arr = this.props.terms.filter((term) => term.node.frontmatter.title.toUpperCase().startsWith(this.state.selected))
        }

        return (
            <>
                <div css={styles.definitionsNav}>
                    <ul>
                        {letters.map((letter, i) => (<li key={i}> <span css={this.state.selected === letter ? styles.selected : {}}><Link to={`${subpath}/${letter.toLowerCase()}/`}>{letter}</Link></span> |</li>))}
                        <li css={{paddingLeft: 4}}><span css={this.state.selected === 'ALL' ? styles.selected : {}}><Link to={`${subpath}/`}>See all</Link></span></li>
                    </ul>
                </div>
                <div css={styles.definitionsList}>
                    <p className="title">{this.state.selected !== 'ALL' ? this.state.selected : 'All'}</p>
                    <ul>
                        {arr.length ? arr.map((term, i) => (
                            <li key={i} css={term.node.frontmatter.title.toLowerCase() === this.state.term ? [styles.definition, styles.showDefinition] : [styles.definition, styles.hideDefinition]}>
                                <div className="term">
                                    <Link to={term.node.frontmatter.title.toLowerCase() === this.state.term ? `${subpath}/${term.node.frontmatter.title[0].toLowerCase()}/` : `${subpath}/${term.node.frontmatter.title[0].toLowerCase()}/${term.node.frontmatter.title.toLowerCase()}/`}>{term.node.frontmatter.title}</Link>
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
