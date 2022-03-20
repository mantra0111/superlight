import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const AssetToUrl = ({ assetId }: { assetId: string }) => {
  interface ContentfulAssetNode {
    contentful_id : string
    file : {
      url : string
      details : {
        image : {
          height : number
          width : number
        }
      } | null
    }
  }


  interface GetAllAssetsQuery {
    allContentfulAsset : {
      nodes : ContentfulAssetNode[]
    }
  }


  return (
    <StaticQuery query={graphql`
        query GetAllAssetsQuery {
  allContentfulAsset {
    nodes {
      contentful_id
      file {
        url
        details {
          image {
            height
            width
          }
        }
      }
    }
  }
}
    
        `} render={(data : GetAllAssetsQuery) => {
          const filterAsset : ContentfulAssetNode = data.allContentfulAsset.nodes.filter((node)=>  node.contentful_id=== assetId)[0]
          
          const {url} = filterAsset.file
          const {height, width} = filterAsset.file.details.image 
        return (<img  height={height} width={width} src={`https:${url}`} />)
      }} />
  )
}

export default AssetToUrl