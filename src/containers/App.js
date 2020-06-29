import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from '../components/NavBar'
import MushroomContainer from '../containers/MushroomContainer'
import Mushroom from '../components/Mushroom'
import MushShowPage from '../components/MushShowPage'
import BYOT from '../components/BYOT'
import Favorites from '../components/Favorites'
// import HealthBenefit from '..components/HealthBenefit'





const App = (props) => {
  return (
    <Router>
      <div className='app'>
        <NavBar />
        <Route exact path='/mushrooms' component={MushroomContainer} />
        <Route exact path='/mushroom' component={Mushroom} />
        <Route exact path='/mushrooms/:id' component={MushShowPage} />
        <Route exact path='/byot' component={BYOT} />
        <Route exact path='/favorites' component={Favorites} />

      </div>
    </Router>
  );
}

export default App;
