import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { Link } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  // same as post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/">Back to homepage</Link>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
