import React, { useState } from 'react';
import saturn from '../../img/saturn.png';
import atom from '../../img/atomIcon.png';

import './style.scss';

const SaturnScreen = (props) => {
  const [section, setSection] = useState('main');

  const smallInformation = [
    'Orbit',
    'Rotation',
    'Size',
    'Core',
    'Magnetism',
    'Moons',
    'Rings',
    'Surface',
  ];

  const smallInformationText = [
    'Completes an orbit in 29.4 Earth years',
    'A day is 10.7 hours long',
    '9 times wider than Earth',
    'Dense core of iron and nickel',
    'Smaller than Jupiter`s but 578 stronger than Earth`s',
    '53 confirmed moons',
    'Made of millions of small chucks of ice and rock',
    'Saturn has no true surface',
  ];

  const atmosphereInformation = [
    'Saturated with clouds that appear as faint stripes, jet streams, and storms',
    'The north pole has a six-sided jet stream with a massive rotating storm at the center',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-saturn">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-saturn">{smallInformationText[index]}</div>
      </div>
    );
  };

  const surfaceInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="surfaceInfo-mercury">
          <div className="info-mercury">{information}</div>
        </div>
      </div>
    );
  };

  const showContent = () => {
    switch (section) {
      case 'main':
        return (
          <div>
            <h1>Small interesting data</h1>
            <div className="container-content-smallinfo">
              {smallInformation.map((info, index) => { return smallInfo(info, index); })}
            </div>
          </div>
        );
      case 'atmosphere':
        return (
          <div>
            <div className="surface-data-container">
              <img className="atomIcon" src={atom} alt="atomIcon" />
              Mostly Hydrogen and Helium
            </div>
            <h1>Interesting features</h1>
            <div className="container-content-smallinfo">
              {atmosphereInformation.map((info, index) => { return surfaceInfo(info, index); })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <img className="planet" src={saturn} alt="saturn" />
      <div className="container-content">
        <div className="title">Saturn</div>
        <div className="container-content-info">
          <div className="sectionbar-saturn">
            <div role="button" tabIndex={0} onClick={() => setSection('main')}>Overview</div>
            <div role="button" tabIndex={0} onClick={() => setSection('atmosphere')}>Atmosphere</div>
          </div>
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default SaturnScreen;
