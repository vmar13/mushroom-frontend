// import React from 'react';
// import '../App.css';
// import {
//   BrowserRouter as Router,
//   Route, Switch
// } from 'react-router-dom'
// import NavBar from '../components/NavBar'
// import Home from './Home'
// import MushroomContainer from '../containers/MushroomContainer'
// import Mushroom from '../components/Mushroom'
// import MushShowPage from '../components/MushShowPage'
// import BYOT from '../components/BYOT'
// import Popular from '../components/Popular'

import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from './Home'
import MushroomContainer from '../containers/MushroomContainer'
import Mushroom from '../components/Mushroom'
import MushShowPage from '../components/MushShowPage'
import BYOT from '../components/BYOT'
import VideoDetail from '../components/VideoDetail'
import Popular from '../components/Popular'

const API_VIDEOS = `http://localhost:3000/api/v1/videos`

class App extends React.Component {

  state = {
    videos: []
  }

  addNewVideo = newVideo => { 
    this.setState({
      videos: [...this.state.videos, newVideo]
    })
  }
  
  addPopVideo = (vidTitle, vidUrl) => {
   const newVideo = {
     title: vidTitle,
     url: vidUrl
   }

    fetch(API_VIDEOS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newVideo)
    })
      .then(res => res.json())
      .then(newVideo => {
        this.addNewVideo(newVideo)
      })
  }

  componentDidMount() {
    fetch(API_VIDEOS)
    .then(res => res.json())
    // .then(console.log)
    .then(videoData => {
      this.setState({ videos: videoData })
    }) 
  }

render() {

  const { videos } = this.state

  return (

      <div className='app'>
        <NavBar />
        <Switch>
        
          <Route  path='/mushrooms/:id' render={ (history) => {
            const mushId = parseInt(history.match.params.id)
            return  <MushShowPage mushId={mushId}/>} }/>
          <Route  path='/mushrooms' render={ (history) => <MushroomContainer />} />
          <Route  path='/mushroom' render={ () => <Mushroom />} />
          <Route  path='/byot' render={ (props) => <BYOT addPopVideo={this.addPopVideo}/>} />
          <Route  path='/popular' render={ (props) => <Popular videos={this.state.videos}/>} />
          <Route  path="/" render={ () => <Home />} />

        </Switch>

      </div>

  );
}
}
  
export default App;

// const App = (props) => {
//   return (
//     <Router>
//       <div className='app'>
//         <NavBar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path='/mushrooms' component={MushroomContainer} />
//           <Route exact path='/mushroom' component={Mushroom} />
//           <Route exact path='/mushrooms/:id' component={MushShowPage} />
//           <Route exact path='/byot' component={BYOT} />
//           <Route exact path='/popular' component={Popular} />
//         </Switch>

//       </div>
//     </Router>
//   );
// }

// export default App;
