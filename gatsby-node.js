const path = require('path')
const slugify = require('slugify')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            category
          }
        }
      }
      category: allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    }
  `)

 

  result.data.allMarkdownRemark.nodes.forEach(
   
    ({ frontmatter: { title, category } }) => {
      console.log(title)
      slug = slugify(title, { lower: true })
      createPage({
        path: `/${category.toLowerCase()}/${slug}`,
        component: path.resolve(`src/templates/post-template.js`),
        context: {
          slug,
          title,
        },
      })
    }
  )

  result.data.category.distinct.forEach(cat => {
    createPage({
      path: `/${cat.toLowerCase()}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        cat,
      },
    })
  })
}
