import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  return(
    <div>
    <Header />
      <ul className="linksInHeader">
         <li><a href="https://github.com/fatcatdog">GitHub</a></li>
         <li><a href="https://www.linkedin.com/in/jakeduchen/">LinkedIn</a></li>
         <li><a href="https://twitter.com/jakeduche">Twitter</a></li>
      </ul>
    <Footer />
    </div>
  )
}

export default Contact;
