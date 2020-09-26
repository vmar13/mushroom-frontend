import React from 'react'
import '../App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MushroomContainer from '../containers/MushroomContainer'
import Mushroom from '../components/Mushroom'
import MushShowPage from '../components/MushShowPage'
import BYOT from '../components/BYOT'
import Auth from '../components/Auth'
import Favorites from '../components/Favorites'

const API_VIDEOS = `http://localhost:3000/api/v1/videos`
const usersURL =  `http://localhost:3000/api/v1/users`

class App extends React.Component {

  state = {
    videos: [],
    users: [],
    currentUser: null,
    favorited: false
  }

  updateUser = (userObj)=> {
    this.setState({ currentUser: userObj  })
  }

  addNewVideo = newVideo => { 
    this.setState({
      videos: [...this.state.videos, newVideo]
    })
  }
  
  toggleFavorited = () => {
    this.setState({ favorited: !this.state.favorited })
  }

  addFavVideo = (vidTitle, vidUrl) => {
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

    deleteVideo = id => {
      fetch(`${API_VIDEOS}/${id}`, {
        method: 'DELETE',
      })
      this.setState({
        videos: this.state.videos.filter(video => video.id !== id)
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

  console.log(this.state.videos)
  // console.log(this.state.currentUser)

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
          <Route  path='/byot' render={ (props) => <BYOT addFavVideo={this.addFavVideo} videos={this.state.videos} toggleFavorited={this.toggleFavorited} favorited={this.state.favorited} />}/>
          <Route  path='/favorites' render={ (routerProps) => <Favorites {...routerProps} videos={this.state.videos} deleteVideo={this.deleteVideo} />} />
          <Route  path="/" render={ (routerProps) => <Auth {...routerProps} currentUser={this.state.currentUser} updateUser={this.updateUser} />} />

        </Switch>

      </div>

  );
}
}
  
export default App