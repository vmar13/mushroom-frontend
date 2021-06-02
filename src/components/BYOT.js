import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from '../components/SearchBar';
import VideoDetail from '../components/VideoDetail';
import VideoList from '../components/VideoList';

const REACT_APP_YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class BYOT extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${this.state.searchTerm}&key=${REACT_APP_YOUTUBE_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ videos: data.items, selectedVideo: data.items[0], searchTerm: ''});
            })
        }
           
        
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }
    
    render() {
        const { videos, selectedVideo } = this.state;
        const { addFavVideo, favorited, toggleFavorited } = this.props;

      
        return(
            <div className='byot-background'>
                <Grid justify='center' container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <h1 className='byot-title'>Brew Your Own Tea</h1>
                            <Grid item sm={12} style={{ padding: '40px' }}>
                                <SearchBar  onSubmit={this.handleSubmit} onChange={this.handleChange} />
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetail video={selectedVideo} addFavVideo={addFavVideo} favorited={favorited} toggleFavorited={toggleFavorited}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default BYOT;