import React from "react";
import { StaticQuery, graphql } from "gatsby";
import MainMenu from "./MainMenu";
import Helmet from "react-helmet";
import styled , {createGlobalStyle} from "styled-components";
import Footer from './Footer';
const GlobalStyle = createGlobalStyle 
`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
body, html{
  font-family: 'Open Sans', sans-serif;
  margin: 0 !important;
  padding:0 !important;

}
`

const LayoutWrapper = styled.div
`
max-width:960px !important;
margin:0 auto !important;
`

const Layout = ({children})=>(
<div>
 <StaticQuery query = {
   graphql
   `
   {
    allWordpressWpFavicon {
      edges {
        node {
          url {
            source_url
          }
        }
      }
    }
   }
   `
 }render={props=>
  <Helmet>
    <link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url}/>
  </Helmet>}/>
  <GlobalStyle/>
  <MainMenu/>
  <LayoutWrapper>
    {children}
  </LayoutWrapper>
    <Footer/>
</div>
)
export default Layout;