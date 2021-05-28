import React from 'react';
import neptune from '../../img/neptune.png';

import './style.scss';

const NeptuneScreen = (props) => {
  return (
    <div>
      <img className="planet" src={neptune} alt="neptune" />
    </div>
  );
};

export default NeptuneScreen;
