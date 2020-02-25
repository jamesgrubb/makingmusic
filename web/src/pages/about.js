import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const data = graphql`
  query AboutQuery {
    allSanityAuthor {
      edges {
        node {
          _id
          name
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      {data.allSanityAuthor.edges.map(({ node: author }) => {
        return <h1>{author.name}</h1>
      })}
    </Layout>
  )
}
