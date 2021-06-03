import React, { useState } from 'react';
import earth from '../../img/earth.png';
import temperature from '../../img/temperatureIcon.png';
import life from '../../img/person.png';
import atom from '../../img/atomIcon.png';

import './style.scss';

const EarthScreen = (props) => {
  const [section, setSection] = useState('main');

  const smallInformation = [
    'Orbit',
    'Sun',
    'Size',
    'Core',
    'Magnetism',
    'Moons',
  ];

  const smallInformationText = [
    '365.25 days, so we add leap day to the calendar',
    'Average distance of 150 million km away from the Sun',
    'Radius of 6371 km, biggest of terrestrial planets',
    'Made of iron and nickel',
    'Rapid rotation + nickel-iron core = magnetic field',
    'Our Moon, 30 Earths away',
  ];
  const surfaceInformation = [
    'Like Mars and Venus, Earth has volcanoes, mountains, and valleys. These features are the result of plate tectonics, which are motions in Earth`s mantle',
    'Volcanic eruptions can produce mountains or lava plains',
    'Primitive rock from Earth`s original surface is gone as the entire planet already heated, so we can find it only in comets, asteroids, or moons',
  ];
  const atmosphereInformation = [
    'Protects us from much of the solar radiation and meteoroids',
    'Air circulation generates clouds and wind, and the temperature decreases when you go higher into the atmosphere',
    'Oxygen levels are due to the first plants that made photosynthesis, leading to the formation of the ozone layer and oceans',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-info">
        <div className="container-smallinfo-earth">
          <div className="smallinfo">{information}</div>
        </div>
        <div>~~~</div>
        <div className="info-earth">{smallInformationText[index]}</div>
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
              -25 ~ 45 degrees Celsius
              <img className="lifeIcon" src={life} alt="lifeIcon" />
              Life possibility:<span className="life-possible">Possible</span>
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
              78% Nitrogen, 21% Oxygen, 1% Argon
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
      <img className="planet" src={earth} alt="earth" />
      <div className="container-content">
        <div className="title">Earth</div>
        <div className="container-content-info">
          <div className="sectionbar-earth">
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

export default EarthScreen;
