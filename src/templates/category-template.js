// import React from 'react'
// import Layout from '../components/Layout'
// import Posts from '../components/blog/index'
// import { graphql } from 'gatsby'
// import styled from 'styled-components'

// const CategoryTemplate = props => {
//   const {
//     data: {
//       categories: { nodes: posts },
//     },
//   } = props
//   const {
//     pageContext: { category },
//   } = props
//   return (
//     <Layout>
//       <CategoryPostsStyles>
//         <Posts posts={posts} title={`${category}`} />
//       </CategoryPostsStyles>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query GetCategories($category: String) {
//     allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//       filter: { frontmatter: { category: { eq: $category } } }
//     ) {
//       nodes {
//         excerpt(pruneLength: 50)
//         frontmatter {
//           category
//           date
//           title
//           image {
//             childImageSharp {
//               fluid {
//                 src
//               }
//               gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
//             }
//           }
//         }
//         id
//       }
//     }
//   }
// `

// const CategoryPostsStyles = styled.section`
//   margin: 4rem 0;
// `

// export default CategoryTemplate
