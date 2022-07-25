import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import InnerHero from "../components/hero/InnerHero";
import styled from "styled-components";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Wrapper>
    <InnerHero pageName= {title} />
    <section className="section">
      {helmet || ""}
      <div className="container content blog-body">
        <div className="">
          <div className="">
            {/* <h1 className="">
              {title}
            </h1> */}
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="return-to-blog"><Link className="button-solid " to="/blog">
            Return to Blog &rarr;
          </Link></div>
        </div>
      </div>
      
    </section></Wrapper>
  );
};

const Wrapper = styled.div`

.return-to-blog{
text-align: center;
}
  .blog-body{
    li{
      margin: 0 2rem;
    }

    ul{
      margin-bottom: 1rem;
    }
  }


.content{
  margin: 4rem auto;
  max-width: 1200px;

}

p{
  margin-bottom: 1rem;
}

h2,h3,h4,h5,h6 {
  margin-top: 1.1428em;
  margin-bottom: .5714em;
}

#int-hero h1{
  font-size: 2rem !important;
  max-width: 46.813em !important;
}
#int-hero h1::before{
  display: none !important;
}

@media screen and (max-width: 663px) {
  #int-hero h1{
    font-size: 1.7rem !important
  }
}

@media screen and (max-width: 410px) {
  #int-hero h1{
    font-size: 1.4rem !important
  }
}
`

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
