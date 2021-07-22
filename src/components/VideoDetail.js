import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video, createFavVideo, toggleFavorited, favorited }) => {
        if(!video) return <div className='loading'>Loading...</div>

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return(
            <React.Fragment>
                <Paper elevation={6} style={{ height: '80%', marginLeft: '6%' }} >
                    <iframe frameBorder='0' height='100%' width='100%'  title='Video Player' src={videoSrc} />
                </Paper>
                <Paper elevation={6} style={{ padding: '5px', marginLeft: '6%'}} >
                    <Typography variant='h4'>{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
                    <Typography variant='subtitle2'>{video.snippet.description}</Typography>
                </Paper>
                <button onClick={(event) => {
                    createFavVideo(video.snippet.title, videoSrc);
                    toggleFavorited();
                    }} className='favorite-btn'>
                    Add to Favorites {favorited ? '💚' : '♡'}
                </button>
            </React.Fragment>
        );
};


export default VideoDetail;