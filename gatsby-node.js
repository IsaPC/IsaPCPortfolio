
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions
    const projectTemplate = path.resolve(
        'src/templates/ProjectTemplate.js'
    )
    
    return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {

    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes
    // ? posts have indexes?

    // create page for each mdx file
    posts.forEach((post, index) => {  
      // condition ? if true : if false
      const previous = (index === posts.length - 1) ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];

      // create page ofr each node
      createPage({
        path: post.fields.slug,
        component: projectTemplate,
        context: {
          // data passed onto each page
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    });
  })
}

//////////////////////////////////////////////////////////////

// this unqiuqe function will log all the URL destionations
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    // check if this node is Mdx
    // The "createFilePath" handles finding the parent File node along with creating the slug
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        // allows you to create additional fields on nodes created by other plugins
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

// grapgql code to see all new slugs
// {
//     allMdx {
//         edges {
//             node {
//                 fields {
//                 slug
//                 }
//             }
//         }
//     }
// }