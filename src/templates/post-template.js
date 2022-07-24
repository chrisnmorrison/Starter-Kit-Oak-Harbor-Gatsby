import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/blog/Sidebar'
import Seo from '../components/SEO'

const PostTemplate = ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: {
        frontmatter: { category, date, title, image },
      },
    },
  } = data

  const {
    allMarkdownRemark: {
      edges: {
        node: { html, excerpt, wordCount },
      },
    },
  } = data

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <Wrapper>
        <section className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <article>
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="main-img"
                />
                <div className="post-info">
                  <h2>{title}</h2>
                  <ul className="card-meta list-inline">
                    <li className="list-inline-item">
                      <AiOutlineClockCircle />
                      {Math.ceil(wordCount.words / 275)} Min Read
                    </li>
                    <li className="list-inline-item">
                      <GoCalendar /> {date}
                    </li>

                    <li className="list-inline-item">
                      <ul className="card-meta-tag list-inline">
                        <li className="list-inline-item">
                          <Link
                            to={`/learn/${category.toLowerCase()}`}
                            className="category-link"
                            style={{}}
                          >
                            <div className="category-text-color">
                              {category}
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="post-body">{html}</div>
              </article>
            </div>
            <Sidebar />
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetPost($title: String) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $title } } }
    ) {
      nodes {
        excerpt(pruneLength: 50)
        frontmatter {
          category
          date
          title
          image {
            childImageSharp {
              fluid {
                src
              }
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
        id
      }
      edges {
        node {
          html
          excerpt(pruneLength: 100)
          wordCount {
            words
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
  margin: 4rem auto;

  .image-attribution {
    text-align: left;
    a {
      color: var(--primary-7);
    }
  }

  .post-info {
    padding: 2rem 0 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 0 0 1.25rem 0;
      font-weight: 400;
      text-align: left;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      /* width: 75%; */
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      /* display: grid;
      grid-template-columns: 1fr 250px;
      column-gap: 4rem; */
    }
  }
`

export default PostTemplate
