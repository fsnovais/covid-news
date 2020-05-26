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
            <i className="fa fa-2x fa-github" aria-hidden="true" /> Felipe
          </a>
          <a href="https://github.com/viyuka45/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-github" aria-hidden="true" /> Vitória
          </a>
          <a href="https://github.com/LucaMozart" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-github" aria-hidden="true" /> Luca
          </a>
          <a href="https://github.com/leandronowras" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-github" aria-hidden="true" /> Leandro
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
