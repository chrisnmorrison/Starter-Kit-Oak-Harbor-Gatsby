import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Seo from "../../components/SEO";
import InnerHero from "../../components/hero/InnerHero";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Latest Stories and News from our Blog" description="" />
      <InnerHero pageName="Latest News" />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
