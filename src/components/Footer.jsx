import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import data from '../data/links.json';

export default function Footer() {
  const nowYear = new Date().getFullYear();
  const dataInfo = `© ${nowYear}`;
  const { menuItems } = data;
  
  return (
    <div className="footerContainer Container" id="footer">
      <div className="d-flex flex-row justify-content-between border-bottom pb-3 mb-3 mx-5">
        <div className="contacts border-end text-end p-5">
          <h5 className='mainTitle footerTitle m-0'>Contact Us</h5>
          <ul>
            <li>
              <p className='Open-sans-700 my-1'>Email</p>
              <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
            </li>
            <li>
              <p className='Open-sans-700 my-1'>Phone</p>
              <a href="tel:666888888">666 888 888</a>
            </li>
            <li>
              <p className='Open-sans-700 my-1'>Address</p>
              <address>88 road, borklyn street, USA</address>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-center footerBrend">
            <Link className="navbar-brand my-1 mx-3" to="/home">
              <img src="/logo.png" alt="logo img" id="logo" className="logoImg" />
            </Link>
            <h1 className="display-4 fw-bold mainTitle roboto-700 mb-2">Organic</h1>
          </div>
          <p className='simpleText'>
            Simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum simply dummy text of the printing.
          </p>
          <div className="icons d-flex flex-row justify-content-center">
            <ul className="list-unstyled d-flex">
              {[faInstagram, faFacebook, faTwitter, faPinterest].map((icon, index) => (
                <li key={index} className='iconBack'>
                  <a href="#" target="_blank" rel="noopener noreferrer" className='socIcon'>
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column border-start text-start p-5">
          <h5 className='mainTitle footerTitle m-0'>Utility Pages</h5>
          <ul className="nav flex-column">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="footLink nav-link Open-sans-400 text-secondary px-1 py-3" to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footerText text-center">{dataInfo} <span className='boltText'>Organic.</span></p>
    </div>
  );
}