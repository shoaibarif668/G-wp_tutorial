import React from "react";
import { StaticQuery, graphql,Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const MainMenuWrapper = styled.div
`
display:flex;
background-color:#72498C;
`
const MainMenuInner = styled.div
`
max-width:960px;
margin:0 auto;
display:flex;
width:960px;
height:100%;
`

const MenuItem = styled(Link)
`
text-decoration:none;
color: white;
display:block;
padding:15px 20px;
`

const MainMenu=()=>{
    return(
    <StaticQuery 
    query={
         graphql
         `
         {
            allWordpressWpApiMenusMenusItems(filter: {name: {eq: "main menu"}}) {
                edges {
                  node {
                    items {
                      title
                      object_slug
                    }
                    name
                  }
                }
              }
         }
         `   
    }
    render={
        props=>(
            <MainMenuWrapper>
                <MainMenuInner>
                    <Logo/>
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>(
                        <MenuItem to={`/${item.object_slug}`} key={item.title}>
                            {item.title}
                        </MenuItem>
                    ))}
                </MainMenuInner>
            </MainMenuWrapper>
        )
    }/>
    )
};

export default MainMenu;