import React from 'react';
import venus from '../../img/venus.png';

import './style.scss';

const VenusScreen = (props) => {
  return (
    <div>
      <img className="planet" src={venus} alt="venus" />
    </div>
  );
};

export default VenusScreen;
