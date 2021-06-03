import React, { useState } from 'react';
import jupiter from '../../img/jupiter.png';
import atom from '../../img/atomIcon.png';

import './style.scss';

const JupiterScreen = (props) => {
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
    'Europa',
  ];

  const smallInformationText = [
    'Around the Sun in 12 Earth years',
    '10 hour rotation',
    '11 times wider than Earth',
    'Possibly a core of rock and ice',
    'Powerful magnetic field',
    '53 confirmed moons, with 4 large ones',
    'Small, dark, and hard to see',
    'Does not have a true surface',
    'Moon with ocean beneath icy crust (life?)',
  ];

  const atmosphereInformation = [
    'Observers can see the Great Red Spot, which is a gigantic storm bigger than Earth',
    'The thick colorful bands visible are plumes of sulfur and phosphorus rising from the interior',
    'The extreme pressures and temperatures of the planet would melt and vaporize spacecraft',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-jupiter">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-jupiter">{smallInformationText[index]}</div>
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
      <img className="planet" src={jupiter} alt="jupiter" />
      <div className="container-content">
        <div className="title">Jupiter</div>
        <div className="container-content-info">
          <div className="sectionbar-jupiter">
            <div role="button" tabIndex={0} onClick={() => setSection('main')}>Overview</div>
            <div role="button" tabIndex={0} onClick={() => setSection('atmosphere')}>Atmosphere</div>
          </div>
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default JupiterScreen;
