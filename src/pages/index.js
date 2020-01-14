import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <ul>
        <li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      </ul>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort:{fields: [frontmatter___date], order:DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            published
          }
        }
      }
    }
  }
`

export default IndexPage
