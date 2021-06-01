import React from 'react'
import '../App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MushroomContainer from '../containers/MushroomContainer'
import Mushroom from '../components/Mushroom'
import MushShowPage from '../components/MushShowPage'
import BYOT from '../components/BYOT'
import Auth from '../components/Auth'
import SignUp from '../components/SignUp'
import Favorites from '../components/Favorites'
import Logout from '../components/Logout'

const API_VIDEOS = `http://localhost:3000/api/v1/videos`

class App extends React.Component {

  state = {
    videos: [],
    username: '',
    loggedIn: false,
    favorited: false
  }

  stayLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      return
    } else {
      this.setState({
        username: user.username,
        loggedIn: true
      })
    }
  }

  updateUsername = username => {
    this.setState({username})
  }

  toggleLoggedIn = () => {
    this.setState({loggedIn: !this.state.loggedIn})
  }

  clearUser = () => {
    localStorage.clear()
    this.updateUsername('')
    this.toggleLoggedIn()
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

    getVideos = () => {
      fetch(API_VIDEOS)
        .then(res => res.json())
        .then(videoData => {
          this.setState({ videos: videoData })
      }) 
    }

  componentDidMount() {
    this.getVideos()
    this.stayLoggedIn()
  }

render() {

  // console.log(this.state.videos)

  return (

      <div className='app'>
        {this.state.loggedIn ? <NavBar /> : null }
        <Switch>
          <Route  path='/mushrooms/:id' render={ (routerProps) => {
            const mushId = parseInt(routerProps.match.params.id)
            return  <MushShowPage {...routerProps} mushId={mushId} currentUser={this.state.currentUser} />} }/>
          <Route  path='/mushrooms' render={ (history) => <MushroomContainer loggedIn={this.state.loggedIn}/>} />
          <Route  path='/mushroom' render={ () => <Mushroom />} />
          <Route  path='/byot' render={ (props) => <BYOT addFavVideo={this.addFavVideo} videos={this.state.videos} toggleFavorited={this.toggleFavorited} favorited={this.state.favorited} />}/>
          <Route  path='/favorites' render={ (routerProps) => <Favorites {...routerProps} videos={this.state.videos} deleteVideo={this.deleteVideo} />} />
          <Route path='/logout' render={ () => <Logout loggedIn={this.state.loggedIn} clearUser={this.clearUser} />} />
          <Route  path='/' render={ () => <SignUp updateUsername={this.updateUsername} toggleLoggedIn={this.toggleLoggedIn} loggedIn={this.state.loggedIn}/>} />
        </Switch>

      </div>

  );
}
}
  
export default App
