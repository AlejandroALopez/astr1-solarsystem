import React from 'react';
import jupiter from '../../img/jupiter.png';

import './style.scss';

const JupiterScreen = (props) => {
  return (
    <div>
      <img className="planet" src={jupiter} alt="jupiter" />
    </div>
  );
};

export default JupiterScreen;
