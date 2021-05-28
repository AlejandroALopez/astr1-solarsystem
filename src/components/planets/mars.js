import React from 'react';
import mars from '../../img/mars.png';

import './style.scss';

const MarsScreen = (props) => {
  return (
    <div>
      <img className="planet" src={mars} alt="mars" />
    </div>
  );
};

export default MarsScreen;
