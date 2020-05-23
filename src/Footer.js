import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <div className="social">
          <a href="https://github.com/phellippe" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-github" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/felipe-dos-santos-novais-332397173/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
          </a>
        </div>

        <a className="smoothScroll" href="#">
          <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
        </a>
          <span className="coffee">
            
          <a href="https://www.buymeacoffee.com/felipenovais" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMugHot} aria-hidden="true" />
          &nbsp; Buy me a Coffee
            </a>

          </span>

      </div>
    );
  }
}

export default Footer;
