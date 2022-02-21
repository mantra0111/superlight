import * as React from "react"
import {graphql} from 'gatsby'
import {renderRichText, RenderRichTextData} from 'gatsby-source-contentful/rich-text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// styles

// markup
const IndexPage = (props) => {


  
  const {postTitle,postContent} = props.data.allContentfulBlogPost.nodes[0] 

  console.log(props)
  console.log(postContent.raw)
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
      <article>
        {documentToReactComponents(JSON.parse(postContent.raw))}
</article>
    </main>
  )
}

export const query = graphql`query MyQuery {
  allContentfulBlogPost {
    nodes {
      postTitle
      postContent {
        raw
      }
    }
  }
}
`


export default IndexPage
