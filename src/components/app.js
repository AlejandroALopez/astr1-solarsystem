import React from 'react';
import {
  BrowserRouter as Router, Route, Link, NavLink, Switch,
} from 'react-router-dom';
import sun from '../img/sun.png';
import mercury from '../img/mercury.png';
import venus from '../img/venus.png';
import earth from '../img/earth.png';
import mars from '../img/mars.png';
import jupiter from '../img/jupiter.png';
import saturn from '../img/saturn.png';
import uranus from '../img/uranus.png';
import neptune from '../img/neptune.png';

import SunScreen from './sun/sun';
import MercuryScreen from './planets/mercury';
import VenusScreen from './planets/venus';
import EarthScreen from './planets/earth';
import MarsScreen from './planets/mars';
import JupiterScreen from './planets/jupiter';
import SaturnScreen from './planets/saturn';
import UranusScreen from './planets/uranus';
import NeptuneScreen from './planets/neptune';

import './style.scss';

const About = (props) => {
  return (
    <div className="about">
      <p>My name is Alejandro Lopez and this is my ASTR 1 creative project. The website asks the user to click on a planet (or the Sun) and see interesting data about it.
        The data starts with simple information about general characteristics of the planet, and the user can click Atmosphere or Surface to learn more about them if the planet has them.
        The project connects to the following course learning objectives:
      </p>
      <p>+ Describe the atmosphere of the rocky planets: The project includes interesting information about the atmosphere of rocky planets that is easy to understand</p>
      <p>+ Describe the general conditions on the surface of Mars: Included within Mars information</p>
      <p>+ Compare and contrast the composition, structure  and atmospheres of the giant planets: These characteristics are present for both planets in the website</p>
      <p>+ Describe how the Sun generates energy: On Sun page alongside more data </p>
      <p className="references">References</p>
      <p>* Chaboyer, Brian. “Exploration of the Solar System Lectures.” Dartmouth Canvas.</p>
      <p>* Astronomy OpenStax Textbook: ISBN-10: 1-938168-28-3</p>
      <p>* Planets by NASA. https://solarsystem.nasa.gov/planets </p>
    </div>
  );
};
const SolarSystem = (props) => {
  return (
    <div>
      <div className="click">Click on a planet to learn more about it!</div>
      <Link to="/sun"><img id="sun" src={sun} alt="sun" /></Link>
      <Link to="/mercury"><img id="mercury" src={mercury} alt="mercury" /></Link>
      <Link to="/venus"><img id="venus" src={venus} alt="venus" /></Link>
      <Link to="/earth"><img id="earth" src={earth} alt="earth" /></Link>
      <Link to="/mars"><img id="mars" src={mars} alt="mars" /></Link>
      <Link to="/jupiter"><img id="jupiter" src={jupiter} alt="jupiter" /></Link>
      <Link to="/saturn"><img id="saturn" src={saturn} alt="saturn" /></Link>
      <Link to="/uranus"><img id="uranus" src={uranus} alt="uranus" /></Link>
      <Link to="/neptune"><img id="neptune" src={neptune} alt="neptune" /></Link>
    </div>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/" exact>Solar System</NavLink>
      <NavLink to="/about">About project</NavLink>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SolarSystem} />
          <Route path="/about" component={About} />
          <Route exact path="/sun" component={SunScreen} />
          <Route exact path="/mercury" component={MercuryScreen} />
          <Route exact path="/venus" component={VenusScreen} />
          <Route exact path="/earth" component={EarthScreen} />
          <Route exact path="/mars" component={MarsScreen} />
          <Route exact path="/jupiter" component={JupiterScreen} />
          <Route exact path="/saturn" component={SaturnScreen} />
          <Route exact path="/uranus" component={UranusScreen} />
          <Route exact path="/neptune" component={NeptuneScreen} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
