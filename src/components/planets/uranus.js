import React from 'react';
import uranus from '../../img/uranus.png';

import './style.scss';

const UranusScreen = (props) => {
  return (
    <div>
      <img className="planet" src={uranus} alt="uranus" />
    </div>
  );
};

export default UranusScreen;
