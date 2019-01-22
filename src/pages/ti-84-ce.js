import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import CalcLayout from '../components/calc-layout'
import Definitions from '../components/definitions'

import * as styles from '../styles/styles.js'

import distanceFormulaPicture from '../images/distanceformula.png'

const imageCss = {
  height: 30,
  width: 'auto',
  padding: 3
}



const Ti84Ce = ({ data, ...props }) => {
  const terms = data.allMarkdownRemark.edges.sort(function (a, b) {
    return a.node.frontmatter.title.toLowerCase().localeCompare(b.node.frontmatter.title.toLowerCase());
  });

  const toggleDefinition = (e) => {
    e.currentTarget.parentElement.classList.toggle('active')
  }

  return (
    <Layout>
      <CalcLayout title="TI-84 CE">
          <div css={[styles.container, styles.calcContainer]}>
            <h2>Getting Started</h2>
            <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div css={styles.center}>
              <Link css={[styles.link, styles.bold]} to='/ti-84-ce/starters-guide'>Starter's Guide</Link>
            </div>
          </div>
          <div css={[styles.container, styles.calcContainer]}>
            <h2>Where To Find…</h2>
            <Definitions path={props.location.pathname} terms={terms}/>
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
                  <p><img css={imageCss} src={distanceFormulaPicture}/></p>
                  <p><iframe width="560" height="315" src="https://www.youtube.com/embed/5VLQFmXqmko" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                </div>
              </div>
            </div>
          </div>
          <div css={[styles.container, styles.calcContainer, styles.noBorder]}>
            ad goes here
          </div>
      </CalcLayout>
    </Layout>
  )
}

export default Ti84Ce

export const query = graphql`
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___title], order: ASC },
    filter: { fileAbsolutePath: { regex: "/(ti-84-ce)/.*(.md)$/"}}
  ) {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}
`
