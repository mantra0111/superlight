import React from 'react'
import { PageProps, graphql } from 'gatsby'

interface QueryAsProps {
  contentfulBlogPost: {
    heroPicture: {
      file: {
        url: string
      }
    }
    postTitle: string
    postContent: {
      raw: string
    }
  }
}

const contentfulBlogPost = (props: PageProps<QueryAsProps>) => {

  const { heroPicture, postContent, postTitle } = props.data.contentfulBlogPost

  console.log(postContent.raw)

  return (
    <>
      <h1><a href="/">{`<-`} back home </a></h1>
      <h1>{postTitle}</h1>
      <img src={`https:${heroPicture.file.url}`} alt={`post "${postTitle}" hero image`} />
      <p>{postContent.raw}</p>

    </>
  )
}

export const query = graphql`query PostContentQuery($id : String) {
    contentfulBlogPost(id: {eq: $id}) {
      heroPicture {
        file {
          url
        }
      }
      postTitle
      postContent {
        raw
      }
    }
  }`

export default contentfulBlogPost