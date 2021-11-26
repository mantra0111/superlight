import * as React from "react"
import {graphql} from 'gatsby'
// styles

// markup
const IndexPage = (props) => {

  const {postTitle} = props.data.allContentfulBlogPost.nodes[0] 

  return (
    <main >
      <title>Home Page</title>
      <h1> current post title = {postTitle} </h1>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export const query = graphql`query MyQuery {
  allContentfulBlogPost {
    nodes {
      postTitle
    }
  }
}
`


export default IndexPage
