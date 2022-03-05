import React from 'react'

export interface PostTeaserProps{
    postTitle : string
    postDate : string
    author ?: string
    postUrl : string
    postThumbnailUrl : string
}

const PostTeaser = ({postThumbnailUrl,postDate,postTitle,postUrl,author} : PostTeaserProps) => {
  return (
    <a href={postUrl} >
        <h4>{postTitle}</h4>
        <h4>{postDate}{author? `,by ${author}.` : `.`}</h4>
        <img height={200} loading='lazy' src={postThumbnailUrl} alt={`post "${postTitle}" thumbnail image`} />
    </a>
  )
}

export default PostTeaser