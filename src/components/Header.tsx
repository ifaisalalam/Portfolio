import React from 'react';
import './Header.css';
import profilePicture from '../assets/images/faisal.jpg';

class Header extends React.Component<any, any> {
  name: string;
  title?: string;
  company?: string;
  companyWebsite?: string;
  subtitle?: string;
  introduction: string;

  constructor(props: any) {
    super(props);

    this.name = 'Faisal Alam';
    this.title = 'Software Development Engineering Intern';
    this.subtitle = 'Backend Engineer | DevSecOps Practitioner | Solutions Architect | Cybersecurity Enthusiast';
    this.introduction = 'I am a Software Engineer who loves designing and developing systems that demand high scalability and availability. I also have good cybersecurity skills.';
    this.company = 'RentoMojo';
    this.companyWebsite = 'https://rentomojo.com';
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const company = this.companyWebsite && this.company ? (
      <a href={this.companyWebsite} target="_blank" rel="noopener noreferrer">
        @{this.company}</a>
    ) : `${this.company ? `@${this.company}` : ''}`;

    const title = (<><span className="brief-info-content">{this.title ? `${this.title}` : ''} {company}</span><br/></>);
    const subtitle = (<span className="brief-info-content brief-info-sub-content">{this.subtitle || ''}</span>);

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col s12 m3 center-on-small-only offset-m1">
              <img className="circle responsive-img" src={profilePicture} alt="Faisal Alam" width="230" />
            </div>

            <div className="col m8">
              <div className="row head-content">
                <div className="col s12 m12">
                  <span className="name-title">{this.name}</span>
                  <br/>
                  {title}
                  {subtitle}
                </div>
                <div className="col s12 m12">
                  <blockquote>
                    {this.introduction}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
