/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `src/data` })
    const path = slug.split('/')
    createNodeField({
      node,
      name: `slug`,
      value: `${path[1]}/where-to-find/${path[2][0]}/${path[2]}`,
    })
    createNodeField({
      node,
      name: `calc`,
      value: path[1],
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  return graphql(`
    {
      calcs: allDirectory(filter: {
        absolutePath: {regex: "//data/.+/"}
      }) {
        edges {
          node {
            name,
            absolutePath
          }
        }
      }
      terms: allMarkdownRemark {
        edges {
          node {
            fields {
              slug,
              calc
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
			Promise.reject(result.errors);
		}

    result.data.calcs.edges.forEach(({ node }) => {
      const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
      letters.forEach((letter) => {
        console.log(`${node.name}/where-to-find/${letter}`)
        createPage({
          path: `${node.name}/where-to-find/${letter}`,
          component: path.resolve(`./src/pages/${node.name}/where-to-find.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            calc: node.name,
          },
        })
      })
    })

    result.data.terms.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/pages/${node.fields.calc}/where-to-find.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          calc: node.fields.calc,
        },
      })
    })
  })
}