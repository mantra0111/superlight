import React from "react"
import { graphql } from 'gatsby'
import { PostTeaser } from '../components/PostTeaser'
import { Helmet } from "react-helmet"


const IndexPage = (props) => {

  const postNodes: {
    id: string
    postTitle: string
    createdAt: string
    heroPicture: {
      file: {
        url: string
      }
    }
  }[] = props.data.allContentfulBlogPost.nodes

  return (
    <main >
      <Helmet
        title={`SuperLight`}
        htmlAttributes={{ lang: 'en' }} >
        <meta name="author" content="Mateo Sierra Betancur" />
        <meta name="keywords" content="development,blog,javascript,mateo,sierra" />
        <meta name="description" content="blog about development ... " />
      </Helmet>
      <h1>
        SUPER LIGHT
        <span role="img" aria-label="Party popper emojis">
          ⚡⚡⚡
        </span>
      </h1>

      {postNodes.map((post) => {
        let imageUrl: string = "https:" + post.heroPicture.file.url
        return (<PostTeaser
          postDate={post.createdAt}
          postTitle={post.postTitle}
          postThumbnailUrl={imageUrl}
          postUrl={post.id} />)
      })}

    </main>
  )
}

export const query = graphql`query MyQuery {
  allContentfulBlogPost {
    nodes {
      id
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
