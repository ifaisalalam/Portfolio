import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SocialProfile {
  name: string,
  link: string
}

class Social extends React.Component<any, any> {
  private readonly socialProfiles: SocialProfile[];

  constructor(props: any) {
    super(props);

    this.socialProfiles = [
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ifaisalalam' },
      { name: 'GitHub', link: 'https://github.com/ifaisalalam' },
      { name: 'Facebook', link: 'https://fb.me/ifaisalalam' },
      { name: 'Instagram', link: 'https://instagram.com/ifaisalalam' },
      { name: 'Medium.com', link: 'https://medium.com/@ifaisalalam' },
    ]
  }

  _getSocialIcon(platform: SocialProfile): [IconProp, string] {
    switch (platform.name) {
      case 'LinkedIn':
        return [faLinkedinIn, 'linkedin-icon'];
      case 'GitHub':
        return [faGithub, 'github-icon'];
      case 'Facebook':
        return [faFacebook, 'fb-icon'];
      case 'Instagram':
        return [faInstagram, 'instagram-icon'];
      case 'Medium.com':
        return [faMedium, 'medium-icon'];
      default:
        return [faComment, ''];
    }
  }

  _socialRows() {
    const rows = [];
    for (const profile of this.socialProfiles)
      rows.push((
        <tr key={profile.name}>
          <td>
            <FontAwesomeIcon icon={this._getSocialIcon(profile)[0]} size="2x" className={this._getSocialIcon(profile)[1]}/>
          </td>
          <td>
            <a href={profile.link} target="_blank" rel="noopener noreferrer">
              {profile.name}
            </a>
          </td>
        </tr>
      ));

    return rows;
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <section>
        <h1 className="h1">Social Links</h1>
        <div className="col s12 m12 divider"/>
        <br/>

        <table className="striped social-table">
          <tbody>
          { this._socialRows() }
          </tbody>
        </table>
      </section>
    );
  }
}

export default Social;
