import React from "react";
import Layout from "../components/layout.js"

export default ({pageContext})=> 
(
    <Layout>

    <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
    <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>

    </Layout>
);
