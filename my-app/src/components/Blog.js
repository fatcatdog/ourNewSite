import React, { useState, useEffect } from "react";
import 'github-markdown-css'
import Header from './Header';
import Footer from './Footer';
import '../styles/Blog.css';
import ReactMarkdown from 'react-markdown';
import { blogsDetails } from '../utils/stuff';

   const Blog = (props) => {
     const[content, setContent] = useState("Not a null string");
     // const[loading, setLoading] = useState(true);

     async function getBlogFromFileSys(){
       let ourString = props.location.pathname;
       let ourBlogTag = ourString.slice(6);
       let ourBlogObj = blogsDetails.filter(obj => {
         return obj.tag == ourBlogTag;
       })
       const theUrl = ourBlogObj[0].ourUrl;
       var words = theUrl.split("/")
       let file = await import(`../blogRepo/${words[2]}/index.md`);
       try{
         console.log(file.default)
         fetch(file.default)
         .then((response) => response.text())
         .then((response) => {
            setContent(response);
         })
       } catch (err) {
         console.log(err)
       }
     }

    useEffect(() => {
        getBlogFromFileSys();
    });

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
