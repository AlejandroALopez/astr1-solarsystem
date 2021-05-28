import React from 'react';
import earth from '../../img/earth.png';

import './style.scss';

const EarthScreen = (props) => {
  return (
    <div>
      <img className="planet" src={earth} alt="earth" />
    </div>
  );
};

export default EarthScreen;
