import React, { useState, useEffect } from "react";
import 'github-markdown-css'
import Header from './Header';
import Footer from './Footer';
import '../styles/Blog.css';
import ReactMarkdown from 'react-markdown';
import { blogsDetails } from '../utils/stuff';

   const Blog = (props) => {
     const[content, setContent] = useState();
     const[loading, setLoading] = useState(true);

      async function getBlogObj(){
        try{
          let ourString = props.location.pathname;
          let ourBlogTag = ourString.slice(6);
          let ourBlogObj = blogsDetails.filter(obj => {
            return obj.tag == ourBlogTag;
          })
          const theUrl = ourBlogObj[0].ourUrl;
          var words = theUrl.split("/")
          console.log(words[2]);
          require("../blogRepo/" + words[2] + "/index.md");
          require(`../blogRepo/${ words[2]}/index.md`);
          fetch("../blogRepo/" + words[2] + "/index.md").then((response) => response.text()).then((response) => {
             setContent(response);
          })
          setLoading(false);
        } catch (err) {
          console.log(err)
        }
      }


    useEffect(() => {
      // if(loading){
        getBlogObj()
      // }
      // fetch(oneBlog).then((response) => response.text()).then((response) => {
      //    setContent(response)
      //   // setLoading(false)
      // })
    });

    // if(loading) {
    //   return(
    //     <div>Loading...</div>
    //   )
    // }

    return (
    <div>
      <Header />
      <div className='settingMargins'>
        <div className='markdown-body'>
          <ReactMarkdown
            source={content}
            escapeHtml={false}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog;
