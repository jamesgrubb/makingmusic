exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityTrack(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            id
            url
            slug {
              current
            }
            mainImage {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const projects = result.data.allSanityTrack.edges || []
  projects.forEach((edge, index) => {
    const path = `/track/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/track.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
