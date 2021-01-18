import React from "react";
import { StaticQuery, graphql,Link } from "gatsby";
import styled from "styled-components";

const MainFooterWrapper = styled.div
`
display:flex;
background-color:#72498C;
`
const MainFooterInner = styled.div
`
max-width:960px;
margin:0 auto;
display:flex;
width:960px;
height:100%;
justify-content:center;
`
const FooterContent = styled.p
`
color:white;
`

export default () =>(
    <MainFooterWrapper>
        <MainFooterInner>
            <FooterContent>Copyright 2021 About me Ltd - Cyrix</FooterContent>
        </MainFooterInner>
    </MainFooterWrapper>
);