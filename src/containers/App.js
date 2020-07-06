import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MushroomContainer from '../containers/MushroomContainer'
import Mushroom from '../components/Mushroom'
import MushShowPage from '../components/MushShowPage'
import BYOT from '../components/BYOT'
import Auth from '../components/Auth'
import Favorites from '../components/Favorites';

const API_FAV_VIDEOS = `http://localhost:3000/api/v1/fav_videos`
const usersURL =  `http://localhost:3000/api/v1/users`

class App extends React.Component {

  state = {
    favVideos: [],
    users: [],
    currentUser: null
  }

  updateUser = (userObj)=> {
    this.setState({ currentUser: userObj  })
  }

  addNewVideo = newFavVideo => { 
    this.setState({
      favVideos: [...this.state.favVideos, newFavVideo]
    })
  }

  addFavVideo = (userId, vidUrl, vidTitle) => {
    const newFavVideo = {
      userId: this.state.currentUser.id,
      url: vidUrl,
      title: vidTitle
    }
 
     fetch(API_FAV_VIDEOS, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       body: JSON.stringify(newFavVideo)
     })
       .then(res => res.json())
       .then(newFavVideo => {
         this.addNewVideo(newFavVideo)
       })
   }
 
  
  // addPopVideo = (vidTitle, vidUrl) => {
  //  const newVideo = {
  //    title: vidTitle,
  //    url: vidUrl
  //  }

  //   fetch(API_VIDEOS, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(newVideo)
  //   })
  //     .then(res => res.json())
  //     .then(newVideo => {
  //       this.addNewVideo(newVideo)
  //     })
  // }


  // deleteVideo = id => {
  //   fetch(`${API_VIDEOS}/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(this.setState({
  //     videos: this.state.videos.filter(video => video.id !== id)
  //   }))
  // }

  componentDidMount() {
    fetch(API_FAV_VIDEOS)
    .then(res => res.json())
    // .then(console.log)
    .then(videoData => {
      let userFavVids = videoData.filter(favVideo => favVideo.user_id === this.state.currentUser.id)

      this.setState({ favVideos: userFavVids })
    }) 
  }

render() {

  console.log(this.state.currentUser)

  const { videos } = this.state

  return (

      <div className='app'>
        {this.state.currentUser === null ? null : <NavBar />}
        <Switch>
        
          <Route  path='/mushrooms/:id' render={ (routerProps) => {
            const mushId = parseInt(routerProps.match.params.id)
            return  <MushShowPage {...routerProps} mushId={mushId} currentUser={this.state.currentUser} />} }/>
          <Route  path='/mushrooms' render={ (history) => <MushroomContainer />} />
          <Route  path='/mushroom' render={ () => <Mushroom />} />
          <Route  path='/byot' render={ (props) => <BYOT addFavVideo={this.addFavVideo}/>} />
          <Route  path='/favorites' render={ (routerProps) => <Favorites {...routerProps} favVideos={this.state.favVideos} deleteVideo={this.deleteVideo} />} />
          <Route  path="/" render={ (routerProps) => <Auth {...routerProps} currentUser={this.state.currentUser} updateUser={this.updateUser} />} />

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
