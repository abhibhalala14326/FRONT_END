import React from 'react'
import BlogProdutcts from '../../Helping-Components/BlogProdutcts'
import BlogTitle from '../../Helping-Components/BlogTitle'
import FooterWhite from '../../Helping-Components/FooterWhite'

const Blog = () => {
  return (
    <div >
      <BlogTitle Title1={"Blog Grid"} Title2={"Fashion"} />

      <BlogProdutcts />
      <FooterWhite/>
    </div>
  );
}

export default Blog
