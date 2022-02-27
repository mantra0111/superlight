import * as React from "react"
import { graphql } from 'gatsby'

const IndexPage = (props) => {

  const postNodes: {
    postTitle: string
    heroPicture: {
      file: {
        url: string
      }
    }
  }[] = props.data.allContentfulBlogPost.nodes

  console.log(postNodes)
  return (
    <main >
      <title>Home Page</title>
      {/* <h1> current post title = {postTitle} </h1> */}
      <h1>
        SUPER LIGHT
        <span role="img" aria-label="Party popper emojis">
          ⚡⚡⚡
        </span>
      </h1>

      {postNodes.map((post) => {
        
        let imageUrl : string = window.location.protocol + post.heroPicture.file.url

        return (<>
          <h3>{post.postTitle}</h3>
          <img src={imageUrl} height="300px" alt="" />
        </>
        )
      })}

    </main>
  )
}

export const query = graphql`query MyQuery {
  allContentfulBlogPost {
    nodes {
      postTitle
      heroPicture {
        file {
          url
        }
      }
    }
  }
}
`


export default IndexPage
