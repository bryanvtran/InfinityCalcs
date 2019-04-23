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
        const fileNode = getNode(node.parent)
        if (fileNode.sourceInstanceName === 'resources') {
            const slug = createFilePath({ node, getNode, basePath: `src/data/resources` })
            createNodeField({
                node,
                name: `sourceInstanceName`,
                value: fileNode.sourceInstanceName,
            })
            createNodeField({
                node,
                name: `slug`,
                value: slug.toLowerCase(),
            })
        } else if (fileNode.sourceInstanceName === 'data') {
            const slug = createFilePath({ node, getNode, basePath: `src/data/definitions` })
            createNodeField({
                node,
                name: `sourceInstanceName`,
                value: fileNode.sourceInstanceName,
            })
            const [, calc, def] = slug.split('/');
            const url = `${calc}/where-to-find/${def.toLowerCase()}/`
            createNodeField({
                node,
                name: `slug`,
                value: url,
            })
        }
    }
}

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              sourceInstanceName,
              slug
            }
          }
        }
      }
    }
  `
).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields && node.fields.slug) {
          if (node.fields.sourceInstanceName === 'resources') {
            createPage({
                path: `/resources${node.fields.slug}`,
                component: path.resolve(`./src/components/resource-post.js`),
                context: {
                  // Data passed to context is available
                  // in page queries as GraphQL variables.
                  slug: node.fields.slug,
                },
            })
          } else if (node.fields.sourceInstanceName === 'data') { 
              createPage({
                path: `/${node.fields.slug}`,
                component: path.resolve(`./src/components/definition-page.js`),
                context: {
                  // Data passed to context is available
                  // in page queries as GraphQL variables.
                  slug: node.fields.slug,
                },
            })
          }
        }
    })
  })
}