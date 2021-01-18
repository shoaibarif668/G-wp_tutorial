import React from "react";
import { StaticQuery, graphql,Link } from "gatsby";
import styled from "styled-components";

const SiteLogoWrapper = styled.div
`
flex-grow:1;
color:white;
margin:0 auto;
`
const LogoImage = styled.img
`
max-width:160px;
`

const Logo=()=>{
    return(
    <StaticQuery 
    query={
        graphql
        `
        {
            allWordpressWpLogo {
                edges {
                  node {
                    id
                    url {
                      source_url
                    }
                  }
                }
            }
        }
        `
    }
    render={props=>
        <SiteLogoWrapper>
            <LogoImage src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Main-Logo"/>
        </SiteLogoWrapper>
    }/>
    )
};
export default Logo;