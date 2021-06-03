import React, { useState } from 'react';
import uranus from '../../img/uranus.png';
import atom from '../../img/atomIcon.png';

import './style.scss';

const UranusScreen = (props) => {
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
    'One orbit takes 84 Earth years',
    'One day takes 17 hours',
    '4 times wider than Earth',
    'Small rocky core',
    'Field tilted 60 degrees from rotation axis',
    '27 known moons',
    '2 sets of rings of different colors',
    'Uranus has no true surface',
  ];

  const atmosphereInformation = [
    'Wind speeds can reach up to 900 km/h, but blow in the reverse direction of the planet`s rotation, except when closer to the poles',
    'Uranus has methane clouds and has no internal heat source',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-uranus">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-uranus">{smallInformationText[index]}</div>
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
              Mostly Hydrogen and Helium, with some methane, water and ammonia
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
      <img className="planet" src={uranus} alt="uranus" />
      <div className="container-content">
        <div className="title">Uranus</div>
        <div className="container-content-info">
          <div className="sectionbar-uranus">
            <div role="button" tabIndex={0} onClick={() => setSection('main')}>Overview</div>
            <div role="button" tabIndex={0} onClick={() => setSection('atmosphere')}>Atmosphere</div>
          </div>
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default UranusScreen;
