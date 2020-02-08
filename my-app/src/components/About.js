import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/About.css';

function About() {
  return(
    <div>
      <Header />
        <div className="aboutHeader">
          <h2>About</h2>
        </div>

      <div className="aboutContainer">
        <div className="aboutMeParagraph">
          <p>After working in software sales for a few years I realized I wanted to learn how to build digital products and learn to code. I currently work as a developer in the financial services industry in the New York area. In my free time I can likely be found playing pickup basketball or staring at a computer screen. If you would like to get in touch with me I can be reached <a href="https://twitter.com/jakeduchen">@jakeduchen</a></p>
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default About;
