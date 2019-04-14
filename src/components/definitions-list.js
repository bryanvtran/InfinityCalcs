import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/styles.js'

const DefinitionsList = ({ letter, terms, path, whereToFind }) => {
    let displayLetter = letter;
    if (letter === 'Numbers') {
        displayLetter = '#'
    }

    // console.log(term.node.frontmatter.title, encodeURI(term.node.frontmatter.title))

    if (letter !== 'All') {
        return (
            <>
                <p>{displayLetter}</p>
                <ul>
                    {terms.length ? terms.map((term, i) => (
                        <li key={i}><Link to={term.node.fields.slug}>{term.node.frontmatter.title}</Link></li>
                    )) : 'No terms.'}
                </ul>
            </>
        )
    }
    else {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        const lettersDict = {}
        letters.forEach((letter) => {
            const filteredTerms = terms.filter((term) => term.node.frontmatter.title.toUpperCase().startsWith(letter))
            lettersDict[letter] = filteredTerms
        })
        return (
            <>
                <div css={styles.definitionsListContainer}>
                    <p>Operations</p>
                    <ul>
                        {terms.filter((term) => term.node.frontmatter.title.match(/^\W/)).length ? 
                            terms.filter((term) => term.node.frontmatter.title.match(/^\W/)).map((term, i) => { 
                            return (
                                <li key={i}><Link to={term.node.fields.slug}>{term.node.frontmatter.title}</Link></li>
                            )
                        }) : 'No terms.'}
                    </ul>
                </div>
                <div css={styles.definitionsListContainer}>
                    <p>#</p>
                    <ul>
                        {terms.filter((term) => term.node.frontmatter.title.match(/^\d/)).length ?
                            terms.filter((term) => term.node.frontmatter.title.match(/^\d/)).map((term, i) => {
                            return (
                                <li key={i}><Link to={term.node.fields.slug}>{term.node.frontmatter.title}</Link></li>
                            )
                        }) : 'No terms.'}
                    </ul>
                </div>
                {letters.map((letter, i) => (
                    <div key={i} css={styles.definitionsListContainer}>
                        <p>{letter}</p>
                        <ul>
                            {lettersDict[letter].length ? lettersDict[letter].map((term, i) => {
                                return (
                                    <li key={i}><Link to={term.node.fields.slug}>{term.node.frontmatter.title}</Link></li>
                                )
                            }) : 'No terms.' }
                        </ul>
                    </div>
                ))}
            </>
        )
    }
}

export default DefinitionsList