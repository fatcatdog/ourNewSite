import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Contact.css';

function Contact() {



  return(
    <div>
    <Header />
      <ul className="ourList">
         <li className="card">
           <div className="innerText">
           <a href="https://github.com/fatcatdog">GitHub</a>
           </div>
         </li>
         <li className="card">
           <div className="innerText">
           <a href="https://www.linkedin.com/in/jakeduchen/">LinkedIn</a>
           </div>
         </li>
         <li className="card">
           <div className="innerText">
            <a href="https://twitter.com/jakeduchen">Twitter</a>
           </div>
         </li>
      </ul>

    <Footer />
    </div>
  )
}

export default Contact;
