import React, { useState } from 'react';
import mars from '../../img/mars.png';
import temperature from '../../img/temperatureIcon.png';
import life from '../../img/lifeIcon.png';
import atom from '../../img/atomIcon.png';

import './style.scss';

const MarsScreen = (props) => {
  const [section, setSection] = useState('main');

  const smallInformation = [
    'Orbit',
    'Rotation',
    'Size',
    'Core',
    'Magnetism',
    'Moons',
    'Seasons',
  ];

  const smallInformationText = [
    'The martian year is 687 Earth days long',
    'Completes a rotation every 24.6 hours',
    'About half the size of the Earth',
    'Dense core of iron, nickel, and sulfur',
    'Evidence of a magnetic field 4 billion years ago',
    'Phobos and Deimos. Small, probably captured asteroids',
    'Seasons as on Earth, but last longer',
  ];
  const surfaceInformation = [
    'Looks reddish due to rusting of iron in its rocks, soil, and dust',
    'Has volcanoes, impact craters, and common dust storms that shape its landscape',
    'Past: Ancient river valley networks, lakebeds, and minerals formed in liquid water',
  ];
  const atmosphereInformation = [
    'Fast winds cause dust storms, sculpting the Martian surface',
    'In the past, gases might have escaped due to low gravity, reducing temperatures and freezing water',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-mars">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-mars">{smallInformationText[index]}</div>
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
              -153 ~ 20 degrees Celsius
              <img className="lifeIcon" src={life} alt="lifeIcon" />
              Life possibility:<span className="life-unknown">Unknown</span>
            </div>
            <h1>Interesting features</h1>
            <div className="container-content-smallinfo">
              {surfaceInformation.map((info, index) => { return surfaceInfo(info, index); })}
            </div>
          </div>
        );
      case 'atmosphere':
        return (
          <div>
            <div className="surface-data-container">
              <img className="atomIcon" src={atom} alt="atomIcon" />
              95% Carbon Dioxide, 5% Nitrogen and Argon
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
      <img className="planet" src={mars} alt="mars" />
      <div className="container-content">
        <div className="title">Mars</div>
        <div className="container-content-info">
          <div className="sectionbar-mars">
            <div role="button" tabIndex={0} onClick={() => setSection('main')}>Overview</div>
            <div role="button" tabIndex={0} onClick={() => setSection('surface')}>Surface</div>
            <div role="button" tabIndex={0} onClick={() => setSection('atmosphere')}>Atmosphere</div>
          </div>
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default MarsScreen;
