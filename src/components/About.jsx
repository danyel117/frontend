import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="about">
      <img
        className="about--personal_image"
        src="../../public/img/DanielSaldarriaga.jpeg"
        alt="ImagenDanielSaldarriaga"
      />
      <div className="about--personal_info">
        <h1 className="about--personal_info-Header-title">
          Daniel Saldarriaga López
        </h1>
        <div className="about--personal_info-Header-job-title">
          <h4>Ingeniero Mecatrónico</h4>
        </div>
        <div className="about--personal_info-additional_data">
          <div className="about--personal_info-additional_data-Header-item">
            <i className="fas fa-mobile-alt" />
            <h4>
              <a href="tel:+573117191377">3117191377</a>
            </h4>
          </div>
          <h5>-</h5>
          <div className="about--personal_info-additional_data-Header-item">
            <i className="fas fa-envelope" />
            <h4>
              <a href="mailto:dsaldarriaga@prevalentware.com">
                dsaldarriaga@prevalentware.com
              </a>
            </h4>
          </div>
          <h5>-</h5>
          <div className="about--personal_info-additional_data-Header-item">
            <i className="fas fa-globe-americas" />
            <h4>
              <a href="https://www.prevalentware.com">www.prevalentware.com</a>
            </h4>
          </div>
          <h5>-</h5>
          <div className="about--personal_info-additional_data-Header-item">
            <i className="fas fa-map-marker-alt" />
            <h4>
              <a href="http://maps.google.com/?q=Medellín, Colombia">
                Medellín, Colombia
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
