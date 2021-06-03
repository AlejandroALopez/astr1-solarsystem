import React, { useState } from 'react';
import neptune from '../../img/neptune.png';
import atom from '../../img/atomIcon.png';

import './style.scss';

const NeptuneScreen = (props) => {
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
    'A Neptunian year takes 165 Earth years',
    'A Neptunian day takes 16 hours',
    '4 times wider than Earth',
    'Small rocky core',
    'Tilted 47 degrees from rotation axis, similar to Uranus',
    '14 known moons',
    '9 rings, relatively young and short-lived',
    'Neptune does not have a solid surface',
  ];

  const atmosphereInformation = [
    'Its vivid, bright blue coloration is due to its gas composition absorbing red light and relfecting blue light',
    'Back in 1989, observers could see a large storm called The Great Dark Spot',
    'Neptune has the fastest winds compared to the other planets, with speeds of more than 2000 km/h',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-neptune">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-neptune">{smallInformationText[index]}</div>
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
              Mostly Hydrogen, Helium, and Methane
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
      <img className="planet" src={neptune} alt="neptune" />
      <div className="container-content">
        <div className="title">Neptune</div>
        <div className="container-content-info">
          <div className="sectionbar-neptune">
            <div role="button" tabIndex={0} onClick={() => setSection('main')}>Overview</div>
            <div role="button" tabIndex={0} onClick={() => setSection('atmosphere')}>Atmosphere</div>
          </div>
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default NeptuneScreen;
