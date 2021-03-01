module.exports = {
  siteMetadata: {
    title: `Isaac Ceff portfolio blog`,
    description: `this is Isaac ceffs portfolio, I include some of my projects here`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    //styling
    `gatsby-plugin-styled-components`,
    // image dependencies
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    //for external component uses - facebook
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/portfolio",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 6000,
            },
          },
        ],
      },
    }, 

  ],
}

// {
//   resolve: `gatsby-transformer-remark`,
//   options: {
//     plugins: [
//       {
//         resolve: `gatsby-remark-images`,
//         options: {
//           // It's important to specify the maxWidth (in pixels) of
//           // the content container as this plugin uses this as the
//           // base for generating different widths of each image.
//           maxWidth: 2160,
//         },
//       },
//     ],
//   },
// },