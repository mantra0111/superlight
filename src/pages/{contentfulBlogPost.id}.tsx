import React from 'react'
import { PageProps, graphql } from 'gatsby'
import RawToText from '../components/RawToText'
import AssetToUrl from '../components/AssetToUrl'

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
  
  console.log(postContent)
  const ImgId = "a023ebd2-1008-5671-9433-b61e5ca4c7e1"
  return (
    <>
      <AssetToUrl id={ImgId} />
      <h1><a href="/">{`<-`} back home </a></h1>
      <h1>{postTitle}</h1>
      <img src={`https:${heroPicture.file.url}`} alt={`post "${postTitle}" hero image`} />
      <RawToText raw={postContent.raw} />
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