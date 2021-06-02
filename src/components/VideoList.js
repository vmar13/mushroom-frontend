import React from 'react';
import { Grid } from '@material-ui/core'
import VideoItem from '../components/VideoItem'

const VideoList = ({ videos, onVideoSelect, toggleFavorited }) => {

    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} toggleFavorited={toggleFavorited} />)
    return(
        <Grid container spacing={2}>
            {listOfVideos}
        </Grid>
    ) 
}

export default VideoList