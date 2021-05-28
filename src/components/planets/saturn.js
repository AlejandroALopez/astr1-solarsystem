import React from 'react';
import saturn from '../../img/saturn.png';

import './style.scss';

const SaturnScreen = (props) => {
  return (
    <div>
      <img className="planet" src={saturn} alt="saturn" />
    </div>
  );
};

export default SaturnScreen;
