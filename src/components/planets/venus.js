import React, { useState } from 'react';
import venus from '../../img/venus.png';
import temperature from '../../img/temperatureIcon.png';
import life from '../../img/lifeIcon.png';
import atom from '../../img/atomIcon.png';

import './style.scss';

const VenusScreen = (props) => {
  const [section, setSection] = useState('main');

  const smallInformation = [
    'Orbit',
    'Rotation',
    'Size',
    'Core',
    'Magnetism',
    'Moons',
  ];

  const smallInformationText = [
    'Nearly-perfect circle orbit of 225 Earth days',
    'Backwards (East to West) completed in 243 days',
    'Close in size to Earth',
    'Iron core of 3,200 km radius',
    'Magnetic field weak because of slow rotation',
    'Venus has no moons',
  ];
  const surfaceInformation = [
    'The surface temperature is hotter because of the Greenhouse effect, which involves CO2 retaining heat',
    'This effect evaporates water and creates more CO2, making it a full circle effect (runaway)',
    'It has mountains, valleys and thousands of volcanoes',
    'Life hard to exist on the extremely hot surface, but the top cloud layers might be an option to search for it',
  ];
  const atmosphereInformation = [
    'Thick atmosphere that absorbs Sun`s heat via heavy clouds',
    'Venus has clouds of sulfuric acid 50km above its surface',
    'At the level the clouds are, it is the same temperature as Earth`s surface',
    'Meteoroids burn up because of the dense atmosphere, so only large ones can impact and make craters',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-venus">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-venus">{smallInformationText[index]}</div>
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
              Up to 471 Celsius!
              <img className="lifeIcon" src={life} alt="lifeIcon" />
              Life possibility:<span className="life-unlikely">Unlikely</span>
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
              96% Carbon Dioxide, 3.5% Nitrogen, etc.
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
      <img className="planet" src={venus} alt="venus" />
      <div className="container-content">
        <div className="title">Venus</div>
        <div className="container-content-info">
          <div className="sectionbar-venus">
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

export default VenusScreen;
