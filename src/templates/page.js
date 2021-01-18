import React from "react";
import Layout from "../components/layout.js"
import styled from "styled-components";

const ImgWrapper = styled.div
`
margin:auto;
`

export default ({pageContext})=> 
(
    <Layout>
    
    <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
    <ImgWrapper dangerouslySetInnerHTML={{__html:pageContext.content}}/>
    

    
    </Layout>
);
