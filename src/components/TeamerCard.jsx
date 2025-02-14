import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  faFacebook: faFacebook,
  faTwitter: faTwitter,
  faInstagram: faInstagram,
};

export default function TeamerCard({ image, name, role, socialLinks }) {
  return (
    <div className="teamersCard rounded-5 bg-light">
      <img src={image} alt={`${name} photo`} />
      <div className="d-flex flex-row justify-content-between  align-items-end my-5 mx-5">
        <div>
          <h4 className="secondText m-0">{name}</h4>
          <h5 className="textTop m-0">{role}</h5>
        </div>
        <div className="text-end mt-5 text-nowrap ">
        {socialLinks && socialLinks.map((link, index) => {
            const icon = iconMap[link.icon]; 
            return (
              icon && (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" socIcon p-1"
                  key={index}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
