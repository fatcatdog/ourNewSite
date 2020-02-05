import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Projects.css';

let data = [
  {name:"BlogCity", description: "App built in SpringBoot, Spring Security, JSP(Requires War Packaging), Oracle AWS RDS, and AWS EB", demoUrl: "http://ec2-18-235-222-8.compute-1.amazonaws.com/", url: "https://github.com/fatcatdog/SpringBlog", screenshot: ""},
  {name:"YoutubeLite", description: "App built with React, Redux, Node, and Youtube API", url: "https://github.com/fatcatdog/light-youtube-player-", demoUrl: "https://youtube-player-react-redux.herokuapp.com/", screenshot: ""},
  {name:"JSBudgetTracker", description: "Budget Calcultor built in Vanilla JS", url:"https://github.com/fatcatdog/monthly-budget-vanilla-js" , demoUrl: "https://vanillajsbudgettracker.herokuapp.com/", screenshot: "" },
  {name:"CheckTheWeather", description: "App built with React, Redux, Node, Google Maps API, and OpenWeatherMap API", url: "https://github.com/fatcatdog/check-the_weather-app", demoUrl: "https://checktheweatherapp.herokuapp.com/", screenshot: "" },
  {name:"WikipediaReader", description: "App built utilizing WikiPedia API, JQuery, and Normalize CSS", url: "https://codepen.io/fatcatdog/pen/aGbrga", demoUrl: "https://codepen.io/fatcatdog/full/aGbrga/", screenshot: "" }
];

const Projects = () => {
  return(
    <div>
      <Header />
      <div className="projectsHeader">
        <h2>Projects</h2>
      </div>
      <div className="projectsContainer">
      <div className="listOfProjects">
        <ul className="ourListStyles">
           {data.map(project => (
             <li>
               {project.name} - {project.description} - <a className="project_link" href={project.url} rel="noreferrer noopener" target="_blank">Repo</a> - <a className="project_link" href={project.demoUrl} rel="noreferrer noopener" target="_blank">Demo</a>

            <br />
            <br />

           </li>
           ))}
           <br />
           More on the way ...
         </ul>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects;
