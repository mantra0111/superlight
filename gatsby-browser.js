import React from 'react'

import Header from './src/components/Header'
import Footer from './src/components/Footer'

const Layout = ({children}) => {
    return(
        <>  
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
  }