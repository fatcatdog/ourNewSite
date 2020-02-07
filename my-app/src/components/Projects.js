import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Projects.css';
import { projects } from '../utils/stuff';

let data = projects;

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
             <li key={project.name}>
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
