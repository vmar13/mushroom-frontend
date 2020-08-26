import React from 'react'
import { Grid } from '@material-ui/core'
import SearchBar from '../components/SearchBar'
import VideoDetail from '../components/VideoDetail'
import VideoList from '../components/VideoList'



const REACT_APP_YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class BYOT extends React.Component {


    state = {
        videos: [],
        selectedVideo: null,
        searchTerm: ''
    }

    handleSubmit = (searchTerm) => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${searchTerm}&key=${REACT_APP_YOUTUBE_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ videos: data.items, selectedVideo: data.items[0], searchTerm: ''})
                console.log(data.items)
            })
        }
           
    
        
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    render() {
        console.log(this.props.videos)
        // console.log(this.state.selectedVideo)
        return(
            <div className='byot-background'>
                <Grid justify='center' container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <h1 className='byot-title'>Brew Your Own Tea</h1>
                            <Grid item sm={12} style={{ padding: '40px' }}>
                                <SearchBar  onSubmit={this.handleSubmit} />
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetail video={this.state.selectedVideo} addFavVideo={this.props.addFavVideo} favorited={this.props.favorited} toggleFavorited={this.props.toggleFavorited}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default BYOT