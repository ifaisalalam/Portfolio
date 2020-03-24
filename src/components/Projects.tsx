import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import cameraLight from '../assets/icons/camera-light.svg';
import './Projects.css';

interface ProjectTeam {
  name: string
  imageLink: string
}

interface Project {
  title: string
  progress: number
  description: string
  github?: string
  link?: string
  teams: ProjectTeam[]
}

class Projects extends React.Component<any, any> {
  projects: Project[];

  constructor(props: any) {
    super(props);

    this.projects = [
      {
        title: "Online IDE and Code Compiler",
        progress: 100,
        description: "An online IDE and Code Compiler that compiles and runs user-submitted code in a sandboxed environment on the server. ",
        github: "https://github.com/ifaisalalam/ide-taskmaster",
        link: "https://ide.ctfhub.io",
        teams: [
          { name: "Faisal Alam", imageLink: "/faisal.jpg" }
        ]
      },
      {
        title: "shortlr.com",
        progress: 60,
        description: "Shortlr is an URL Shortener written in Node.js. The application runs on Google App Engine and uses Google Cloud Firestore as the database.",
        github: "https://github.com/ifaisalalam/shortlr",
        link: "https://deft-axon-242411.appspot.com",
        teams: [
          { name: "Faisal Alam", imageLink: "/faisal.jpg" }
        ]
      },
      {
        title: "CTFHUB",
        progress: 100,
        description: "CTFHUB is a Capture the Flag platform where people willing to learn and improve their cyber security skills can practice and compete.",
        link: "https://ctfhub.io",
        teams: [
          { name: "Faisal Alam", imageLink: "/faisal.jpg" },
          { name: "Arun Chaudhary", imageLink: "/arun.jpeg" }
        ]
      },
    ];
  }

  _renderTeamImages(project: Project) {
    const teams = [];

    for (const member of project.teams) {
      teams.push((
        <>
          <img className="card-footer-image" src={member.imageLink} height="30px" alt="team-member" title={member.name}/>
          &nbsp;
        </>
      ))
    }

    return teams;
  }

  _renderResources(project: Project) {
    if (!project.link && !project.github) {
      return (<></>);
    }

    let github, link = (<></>);

    if (project.github) {
      github = (
        <span className="project-resource-item">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="project-resource-link"
             title="Source Code">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
        </span>
      );
    }

    if (project.link) {
      link = (
        <span className="project-resource-item">
          <a href={project.link} target="_blank" rel="noopener noreferrer"
             className="project-resource-link" title="View Project">
            <img src={cameraLight} height="25px" alt=""/>
          </a>
        </span>
      );
    }

    return (<>{github} {link}</>);
  }

  _getProjectCards() {
    const projects = [];
    for (const project of this.projects) {
      projects.push((
        <div className="col s12 m4 d-flex">
          <div className="card">
            <div className="card-title">
              {project.title}
            </div>

            <div className="divider project-heading-divider"/>
            <div className="card-content">
              <div className="project-progress">
                <div className="progress-title">
                  <span className="progress-percent">{project.progress}%</span> completed
                </div>
                <div className="progress">
                  <div className="determinate" style={{ width: `${project.progress}%` }}/>
                </div>
              </div>

              <div className="project-description">
                {project.description}
              </div>

              <div className="project-resources">
                {this._renderResources(project)}
              </div>
            </div>

            <div className="divider"/>

            <div className="card-footer">
              <div className="card-footer-title">
                Teams
              </div>
              <div className="card-footer-content">
                {this._renderTeamImages(project)}
              </div>
            </div>
          </div>
        </div>
      ))
    }

    return projects;
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <section>
        <h1 className="h1">Projects</h1>
        <div className="col s12 m8 divider"/>
        <br/>

        <div className="row d-flex align-items-stretch">
          {this._getProjectCards()}
        </div>
      </section>
    );
  }
}

export default Projects;
