import React from "react";
import Header from './Header';
import Footer from './Footer';
import '../styles/Blogs.css';
import { Link } from 'react-router-dom'
// import ReactMarkdown from 'react-markdown';
import { blogsDetails } from '../utils/stuff';

let data = blogsDetails;

const Blogs = () => {

  return(
    <div>
      <Header />
        <div className="projectsHeader">
          <h2>Blogs</h2>
        </div>

        <div className="projectsContainer">
        <div className="listOfProjects">
          <ul className="ourListStyles">
             {data.map(blogItem => (
               <li key={blogItem.ourUrl}>
               <Link
                 to={{pathname: '/blog/' + blogItem.tag}}>{blogItem.name}
               </Link> - {blogItem.ourDate}<br/><br/>
               </li>
             ))}
           </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Blogs;
