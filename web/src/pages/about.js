import React from "react"
import { graphql } from "gatsby"

export const AboutQuery = graphql`
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
  console.log(data)
  return (
    <React.Fragment>
      {data.allSanityAuthor.edges.map(node => {
        return <h1>{node.name}</h1>
      })}
    </React.Fragment>
  )
}
