import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const distinctCategoriesquery = graphql`
{
  allMarkdownRemark(filter: {}) {
    distinct(field: frontmatter___category)
  }
}

`

//returns distinct categories - i.e. for "all categories list"
const CategoriesDistinct = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(distinctCategoriesquery)
  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoriesDistinct
