import React from 'react'

interface Content {
    nodeType : "heading-6" |
     "heading-5" |
     "heading-4" |
     "heading-3" |
     "heading-2" |
     "heading-1" |
     "paragraph" | 
     "embedded-asset-block"
    value : string
    marks : unknown[]
    data : {
        target : {
            sys : {
                id : string
                type : string
                linkType : string
            }
        }
    }  
}

interface ContentNode {
    nodeType : string
    content : Content[]
}

function HTMLMaker({nodeType}:Content) {
    const maker : {[property in Content["nodeType"]] : () => React.ReactNode} = {
        "heading-1" : () => <h1>{}</h1>,
        "heading-2" : () => <h2>{}</h2>,
        "heading-3" : () => <h3>{}</h3>,
        "heading-4" : () => <h4>{}</h4>,
        "heading-5" : () => <h5>{}</h5>,
        "heading-6" : () => <h6>{}</h6>,
        "embedded-asset-block" : () => <img src="" alt="" />,
        "paragraph" : () => <p>{}</p>
    }

    return maker[nodeType]
}


interface RawToEdibleProps {
    postContent: {
        raw: string
      }
}

const RawToEdible :React.FC<RawToEdibleProps> = ({postContent,children}) => {
  return (
    <div></div>
  )
}

export default RawToEdible