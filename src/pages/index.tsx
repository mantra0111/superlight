import * as React from "react"
import { graphql } from 'gatsby'
import {PostTeaserProps,PostTeaser} from '../components/PostTeaser'


const IndexPage = (props) => {

  const postNodes: {
    postTitle: string
    createdAt : string
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

      <h1>
        SUPER LIGHT
        <span role="img" aria-label="Party popper emojis">
          ⚡⚡⚡
        </span>
      </h1>

      {postNodes.map((post) => {
        let imageUrl : string = "https:" + post.heroPicture.file.url
        return (<PostTeaser 
          postDate={post.createdAt} 
          postTitle={post.postTitle}
          postThumbnailUrl={imageUrl}
          postUrl={imageUrl} />)
      })}

    </main>
  )
}

export const query = graphql`query MyQuery {
  allContentfulBlogPost {
    nodes {
      postTitle
      createdAt(formatString: "DD/MM/yyyy")
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
