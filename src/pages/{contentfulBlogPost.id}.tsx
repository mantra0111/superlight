import React from 'react'
import { PageProps, graphql } from 'gatsby'
import RawToText from '../components/RawToText'

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
  
  return (
    <main >
      <section id="post-header" >
      <h1><a href="/">{`<-`} back home </a></h1>
      <h1>{postTitle}</h1>
      <img src={`https:${heroPicture.file.url}`} alt={`post "${postTitle}" hero image`} />
      </section>
      <RawToText raw={postContent.raw} />
    </main>
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