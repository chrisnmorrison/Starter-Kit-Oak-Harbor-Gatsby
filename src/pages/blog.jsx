import React from 'react'
import Posts from '../components/blog'
import { graphql, useStaticQuery } from 'gatsby'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        limit: 10
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          excerpt(pruneLength: 50)
          frontmatter {
            category
            date
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `)
  const { posts } = data.allMarkdownRemark.nodes
  return <Posts posts={posts} />
}

export default Blog
