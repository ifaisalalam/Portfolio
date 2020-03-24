import React from 'react';
import './Skills.css';

interface Skill {
  name: string,
  percentage: number
}

class Skills extends React.Component<any, any> {
  programmingSkills: Skill[];
  otherSkills: Skill[];
  tools: Skill[];

  constructor(props: any) {
    super(props);

    this.programmingSkills = [
      { name: 'Node.JS/JavaScript', percentage: 100 },
      { name: 'Python', percentage: 94 },
      { name: 'PHP', percentage: 100 },
      { name: 'Golang', percentage: 60 },
      { name: 'HTML5', percentage: 100 },
      { name: 'CSS/CSS3', percentage: 60 },
    ];
    this.otherSkills = [
      { name: 'Google Cloud Platform', percentage: 100 },
      { name: 'Amazon Web Services', percentage: 80 },
      { name: 'Docker', percentage: 100 },
      { name: 'Kubernetes', percentage: 75 },
      { name: 'Docker Swarm', percentage: 70 },
    ];
    this.tools = [
      { name: 'Terraform', percentage: 100 },
      { name: 'Ansible', percentage: 100 },
    ]
  }

  _renderSkills(skillsList: Skill[], i = 0) {
    const skillElement = [];
    const colors = ['#c0392b', '#1498FD', '#9B59B6', '#FFA629', '#3BAF60', '#880e4f', '#0091ea', '#9c27b0', '#d500f9'];

    for (const skill of skillsList) {
      skillElement.push((
        <li key={i}>
          <div className="progressbar-title">
            <h3>{skill.name}</h3>
          </div>
          <div className="bar-container">
            <span className="progressbar progress-red"
                  style={{ width: `${skill.percentage}%`, backgroundColor: `${colors[i++ % colors.length]}`}}/>
          </div>
        </li>
      ))
    }

    return (
      <ul className="collection skills-bar-container">
        {skillElement}
      </ul>
    )
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <section id="skills">
        <h1 className="h1">Tech Skills</h1>
        <div className="col s12 m8 divider"/>
        <br/>

        <div className="row">
          <div className="col s12 m4">
            <section>
              <h3 className="skill-section">Programming</h3>
              {this._renderSkills(this.programmingSkills)}
            </section>
          </div>

          <div className="col s12 m4">
            <section>
              <h3 className="skill-section">Others</h3>
              {this._renderSkills(this.otherSkills, 2)}
            </section>
          </div>

          <div className="col s12 m4">
            <section>
              <h3 className="skill-section">Tools</h3>
              {this._renderSkills(this.tools, 7)}
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
