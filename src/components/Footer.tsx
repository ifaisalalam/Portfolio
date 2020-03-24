import React from 'react';
import './Footer.css';
import Social from './Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className=" footer-box">
        <div className="row footer-content">
          <div className="col s12 m3">
            <Social />
          </div>

          <div className="col s12 m3 offset-m1">
            <section>
              <h1 className="h1">Contact</h1>
              <div className="col s12 divider"/>
              <br/>

              <address>
                <span style={{ whiteSpace: "pre"}}>
                  504 Zolo Creed, 1st Cross Road, SG Palya
                  <br/>Bengaluru - 560029 <br/>Karnataka, India
                </span>
                <br/><br/>
                <FontAwesomeIcon icon={faEnvelope} size="1x" className=""/> <a href="mailto:ifaisalalam@gmail.com">
                  ifaisalalam@gmail.com</a>
                <br/><br/>

                <FontAwesomeIcon icon={faMobileAlt} size="1x" className=""/> <a href="tel:+917986235984">
                  +91 798-6235-984</a>
              </address>
            </section>
          </div>
        </div>
        <div className="footer-text-section">
          <span className="footer-text">
             Made with <FontAwesomeIcon icon={faHeart} className="heart-beat"/> by <a
              href="/#head">Faisal Alam</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
