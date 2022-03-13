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
    content : {
        nodeType : string
        value : string
        marks : unknown[]
        data : unknown
    }[] | null

    data : {
        target : {
            sys : {
                id : string
                type : string
                linkType : string
            } | null
        }| null
    }  
}

interface PostContent {
    nodeType : string
    data : Object
    content : Content[]
}

function HTMLMaker({nodeType,content,data}:Content) {
    
    const maker : {[property in Content["nodeType"]] : React.ReactNode} = {
        "heading-1" : content.length > 0 ? <h1> {content[0].value}</h1> : null,
        "heading-2" : content.length > 0 ? <h2> {content[0].value}</h2> : null,
        "heading-3" : content.length > 0 ? <h3> {content[0].value}</h3> : null,
        "heading-4" : content.length > 0 ? <h4> {content[0].value}</h4> : null,
        "heading-5" : content.length > 0 ? <h5> {content[0].value}</h5> : null,
        "heading-6" : content.length > 0 ? <h6> {content[0].value}</h6> : null,
        "embedded-asset-block" : <img src={``} alt={`${data.target?.sys.id}`} />,
        "paragraph" : content.length > 0 ? content[0].value === "" ? <br/> : <p>{content[0].value}</p> : null
    }

    return maker[nodeType]
}


interface RawToEdibleProps {
        raw: string
}

const RawToEdible :React.FC<RawToEdibleProps> = ({raw}) => {

    
    return(
        <section id="post-content" >
            {(JSON.parse(raw) as PostContent).content.map((node)=>
            //@ts-ignore
            HTMLMaker(node))}
        </section>
    )
}

export default RawToEdible