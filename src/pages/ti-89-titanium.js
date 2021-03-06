import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'
import Definitions from '../components/definitions'

import * as styles from '../styles/styles.js'

const Ti89Titanium = ({ data, ...props }) => {
  const terms = data.allMarkdownRemark.edges.sort(function (a, b) {
    return a.node.frontmatter.title.toLowerCase().localeCompare(b.node.frontmatter.title.toLowerCase());
  });

  const toggleDefinition = (e) => {
    e.currentTarget.parentElement.classList.toggle('active')
  }

  const selectedLetter = props.location.search.split('?l=')[1];

  return (
    <Layout>
      <CalcLayout title="TI-89 Titanium">
          <div css={[styles.container, styles.calcContainer]}>
            <h2>Getting Started</h2>
            <p className="body">The TI-89 Titanium is a powerful graphing calculator that makes advanced calculations and 3D graphing easier for engineering and science courses. There is a built-in Computer Algebra System (CAS) that allows you to explore and manipulate mathematical expressions in symbolic form.</p>
            <div css={styles.center}>
              <Link css={[styles.link, styles.bold]} to='/ti-89-titanium/starters-guide'>Starter's Guide</Link>
            </div>
          </div>
          <div css={[styles.container, styles.calcContainer]}>
            <h2>Where To Find…</h2>
            <Definitions selected={selectedLetter} path={props.location.pathname} terms={terms}/>
          </div>
          <div css={[styles.container, styles.calcContainer]}>
            <h2>Solving Math Problems</h2>
            <ul css={styles.mathProblems}>
              <li><Link to="">Pre-Algebra</Link></li>
              <li><Link to="">Algebra</Link></li>
              <li><Link to="">Geometry</Link></li>
              <li><Link to="">Trigonometry</Link></li>
              <li><Link to="">Calculus</Link></li>
              <li><Link to="">Statistics</Link></li>
            </ul>
          </div>
          <div css={[styles.container, styles.calcContainer]}>
            <h2>Programming</h2>
            <div css={styles.programming}>
              <div className="wrapper">
                <div onClick={toggleDefinition} className="title">Mid-Point Formula</div>
                <div className="definition">
                  <p>Formula</p>
                  <p>Youtube Video</p>
                </div>
              </div>
              <div className="wrapper">
                <div onClick={toggleDefinition} className="title">Quadratic Formula</div>
                <div className="definition">
                  <p>Formula</p>
                  <p>Youtube Video</p>
                </div>
              </div>
              <div className="wrapper">
                <div onClick={toggleDefinition} className="title">Distance Formula</div>
                <div className="definition">
                  <p>Formula</p>
                  <p>Youtube Video</p>
                </div>
              </div>
            </div>
          </div>
          <div css={[styles.container, styles.calcContainer, styles.noBorder]}>
            anthony davis goes here
          </div>
      </CalcLayout>
    </Layout>
  )
}

export default Ti89Titanium

export const query = graphql`
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___title], order: ASC },
    filter: { fileAbsolutePath: { regex: "/(ti-89-titanium)/.*(.md)$/"}}
  ) {
    edges {
      node {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`
