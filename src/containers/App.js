import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MushroomContainer from '../containers/MushroomContainer';
import Mushroom from '../components/Mushroom';
import MushShowPage from '../components/MushShowPage';
import BYOT from '../components/BYOT';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Favorites from '../components/Favorites';
import Logout from '../components/Logout';

const API_FAVORITES = `http://localhost:3000/api/v1/favorites`;

class App extends React.Component {

  state = {
    videos: [],
    username: '',
    loggedIn: false,
    favorited: false
  };

  stayLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return
    } else {
      this.setState({
        username: user.username,
        loggedIn: true
      })
    }
  };

  updateUsername = username => {
    this.setState({username});
  };

  toggleLoggedIn = () => {
    this.setState({loggedIn: !this.state.loggedIn});
  };

  clearUser = () => {
    localStorage.clear();
    this.updateUsername('');
    this.toggleLoggedIn();
  };

  addNewVideoToArr = newVideo => { 
    this.setState({
      videos: [...this.state.videos, newVideo]
    });
  };
  
  toggleFavorited = () => {
    this.setState({ favorited: !this.state.favorited });
  };

  createFavVideo = (vidTitle, vidUrl) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const newVideo = {
      user_id: user.id,
      title: vidTitle,
      url: vidUrl
    };

    fetch(API_FAVORITES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newVideo)
    })
      .then(res => res.json())
      .then(newVideo => {
        this.addNewVideoToArr(newVideo);
      });
  };

    deleteVideo = id => {
      fetch(`${API_FAVORITES}/${id}`, {
        method: 'DELETE',
      })
      this.setState({
        videos: this.state.videos.filter(video => video.id !== id)
      });
    };

    getFavorites = () => {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user) {
        fetch(API_FAVORITES, {
          method: 'GET',
          headers: {Authorization: `Bearer ${user.token}`}
        })
        .then(res => res.json())
        .then(favData => {
          if (favData.length > 0) {
            let userVideos = favData.filter(fav => fav.user_id === user.id)
            this.setState({ videos: userVideos })
          } else {
            return;
          }
      })
      } else {
        return;
      }
    };

    toggleNavElements = () => {
      let navElements = document.querySelector('.nav-elements');
        navElements.classList.toggle('show');      
    };

    componentDidMount() {
      this.getFavorites();
      this.stayLoggedIn();
    };

    render() {

    return (
        <div className='app'>
          {this.state.loggedIn ? <NavBar toggleNavElements={this.toggleNavElements} /> : null }
          <Switch>
            <Route  path='/mushrooms/:id' render={ (routerProps) => {
              const mushId = parseInt(routerProps.match.params.id)
              return  <MushShowPage {...routerProps} mushId={mushId} currentUser={this.state.currentUser} />} }/>
            <Route  path='/mushrooms' render={ (history) => <MushroomContainer loggedIn={this.state.loggedIn}/>} />
            <Route  path='/mushroom' render={ () => <Mushroom />} />
            <Route  path='/byot' render={ (props) => <BYOT createFavVideo={this.createFavVideo} videos={this.state.videos} toggleFavorited={this.toggleFavorited} favorited={this.state.favorited} />}/>
            <Route  path='/favorites' render={ (routerProps) => <Favorites {...routerProps} videos={this.state.videos} deleteVideo={this.deleteVideo} />} />
            <Route path='/login' render={ () => <Login updateUsername={this.updateUsername} toggleLoggedIn={this.toggleLoggedIn} loggedIn={this.state.loggedIn} />} />
            <Route path='/logout' render={ () => <Logout loggedIn={this.state.loggedIn} clearUser={this.clearUser} />} />
            <Route  path='/' render={ () => <SignUp updateUsername={this.updateUsername} toggleLoggedIn={this.toggleLoggedIn} loggedIn={this.state.loggedIn}/>} />
          </Switch>
        </div>
    );
  };
};
  
export default App;
