/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Small Business',
    titleTemplate: '%s - Proudly serving Ottawa',
    description: 'Insert business description here',
    url: 'https://www.openeducation.one', // No trailing slash allowed!
    image: '/logo.png', // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: '@opendotone',
    defaultTitle: 'Open Education',
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}'),
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/content`,
    //   },
    // },

  ],
}
