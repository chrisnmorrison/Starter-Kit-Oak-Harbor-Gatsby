const path = require('path')
const slugify = require('slugify')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            category
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

  result.data.allMdx.nodes.forEach(({ frontmatter: { title, category } }) => {
    slug = slugify(title, {lower:true})
    createPage({
      path: `/learn/${category.toLowerCase()}/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug, title
      },
    })
  })

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/learn/${category.toLowerCase()}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
}
