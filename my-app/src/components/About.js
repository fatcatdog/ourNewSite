import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/About.css';

function About() {
  return(
    <div>
      <Header />
      <div className="aboutContainer">
        <div className="aboutMeParagraph">
        <p>After working in SaaS sales for a few years I realized I wanted to learn how to build digital products and learn to code. I currently work as a developer in the financial services industry in New York City. In my free time I can likely be found playing pickup basketball or biking around New York City. If you are reading this page and you would like to get in touch with me I can be reached on my <a href="https://twitter.com/jakeduche">@jakeduche</a></p>
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default About;
