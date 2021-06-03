import React, { useState } from 'react';
import mercury from '../../img/mercury.png';
import temperature from '../../img/temperatureIcon.png';
import life from '../../img/lifeIcon.png';

import './style.scss';

const MercuryScreen = (props) => {
  const [section, setSection] = useState('main');

  const smallInformation = [
    'Orbit',
    'Rotation',
    'Interior',
    'Size',
    'Magnetism',
    'Moons',
    'Atmosphere',
  ];

  const smallInformationText = [
    'Travels around the Sun in 88 days',
    'Rotates completely every 59 days',
    'Iron core about the size of our Moon',
    '2.6 times smaller than Earth',
    'Weak magnetic field indicates partially liquid core',
    'Mercury has no moons',
    'Mercury has no atmosphere',
  ];

  const surfaceInformation = [
    'Absence of an atmosphere prevents Mercury from retaining heat at night, leading to extremely warm and cold surface temperatures',
    'Multiple craters dating from early in the solar system history',
    'Possible frozen water near poles',
    'However, extreme temperatures and solar radiation make life (as we know it) improbable',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-mercury">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-mercury">{smallInformationText[index]}</div>
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
      case 'surface':
        return (
          <div>
            <div className="surface-data-container">
              <img className="temperatureIcon" src={temperature} alt="temperatureIcon" />
              -170 ~ 430 Celsius
              <img className="lifeIcon" src={life} alt="lifeIcon" />
              Life possibility:<span className="life-unlikely">Unlikely</span>
            </div>
            <h1>Interesting features</h1>
            <div className="container-content-smallinfo">
              {surfaceInformation.map((info, index) => { return surfaceInfo(info, index); })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <img className="planet" src={mercury} alt="mercury" />
      <div className="container-content">
        <div className="title">Mercury</div>
        <div className="container-content-info">
          <div className="sectionbar-mercury">
            <div role="button" tabIndex={0} onClick={() => setSection('main')}>Overview</div>
            <div role="button" tabIndex={0} onClick={() => setSection('surface')}>Surface</div>
          </div>
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default MercuryScreen;
