import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from '../API/YouTube'
import SearchBar from '../components/SearchBar'
import VideoDetail from '../components/VideoDetail'
import VideoList from '../components/VideoList'



class BYOT extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (searchTerm) => {
        const response = await YouTube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDjjFkdxBSz_E7ntNCKM4lsSaExD1d93us',
                q: searchTerm
            }
        })
        
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})

    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    render() {
        return(
            
                <Grid justify='center' container spacing={10}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <SearchBar  onSubmit={this.handleSubmit} />
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetail video={this.state.selectedVideo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        )
    }
}

export default BYOT