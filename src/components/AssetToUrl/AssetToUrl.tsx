import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const AssetToUrl = ({id} : {id : string}) => {

    const queryAssetById = graphql`
query GetAssetById($id : String) {
  contentfulBlogPost(id: {eq: $id}) {
    heroPicture {
      file {
        url
      }
    }
  }
}

    `


    return (
        <StaticQuery  query={queryAssetById } render={({data})=>{
            return(<><h1>{data}</h1></>)
        }} />
    )
}

export default AssetToUrl