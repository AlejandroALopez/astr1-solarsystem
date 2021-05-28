import React from 'react';
import mercury from '../../img/mercury.png';

import './style.scss';

const MercuryScreen = (props) => {
  return (
    <div>
      <img className="planet" src={mercury} alt="mercury" />
    </div>
  );
};

export default MercuryScreen;
