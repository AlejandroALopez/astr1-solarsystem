import React, { useState } from 'react';
import sun from '../../img/sun.png';
import prominences from '../../img/prominence.jpeg';
import sunspot from '../../img/sunspot.jpeg';
import cme from '../../img/cme.jpg';
import flares from '../../img/flares.png';

import './style.scss';

const SunScreen = (props) => {
  const [section, setSection] = useState('main');

  const smallInformation = [
    'Chemical composition: 73% Hydrogen, 25% Helium, 2% Oxygen, Carbon, etc. ',
    'Mean distance from Earth is 149,597,892 km, and it has a mass of 333,400 Earths',
    'Full rotation at equator period: 24 days and 16 hours',
  ];

  const layers = [
    'Core', 'Radioactive Zone', 'Convective Zone', 'Photosphere', 'Chromosphere', 'Transition Region', 'Corona',
  ];

  const layersInformation = [
    'Energy source: Fusionates Hydrogen to form Helium',
    'Energy passes slowly through it',
    'Transmits core energy to the surface',
    'Visible surface of the Sun where sunspots occur',
    'Made of hot gases emitting light',
    'Temperature increases abruptly',
    'Observable during solar eclipses',
  ];

  const smallInfo = (information, index) => {
    return (
      <div key={index} className="container-smallinfo">
        <div className="smallinfo">{information}</div>
      </div>
    );
  };

  const layerInfo = (information, index) => {
    return (
      <div key={index} className="container-layers">
        <div className="container-layerinfo">
          <div className="layer">{information}</div>
        </div>
        <div>~~~</div>
        <div className="layerinfo">{layersInformation[index]}</div>
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
            <h2>Layers (from innermost to outermost)</h2>
            <div className="container-content-layerinfo">
              {layers.map((layer, index) => { return layerInfo(layer, index); })}
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="container-events">
            <div className="container-events-event">
              <div className="container-events-event-text">Sunspots</div>
              <img className="container-events-event-image" src={sunspot} alt="sunspot" />
            </div>
            <div className="container-events-event">
              <div className="container-events-event-text">Prominences</div>
              <img className="container-events-event-image" src={prominences} alt="prominence" />
            </div>
            <div className="container-events-event">
              <div className="container-events-event-text">Solar Flares</div>
              <img className="container-events-event-image" src={flares} alt="flares" />
            </div>
            <div className="container-events-event">
              <div className="container-events-event-text">Coronal Mass Ejections (CMEs)</div>
              <img className="container-events-event-image" src={cme} alt="cme" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <img className="sun2" src={sun} alt="sun2" />
      <div className="container-content">
        <div className="title">The Sun</div>
        <div className="container-content-info">
          <div className="sun-sectionbar">
            <div role="button" tabIndex={0} onClick={() => setSection('main')}>Overview and Layers</div>
            <div role="button" tabIndex={0} onClick={() => setSection('events')}>Solar events</div>
          </div>
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default SunScreen;
