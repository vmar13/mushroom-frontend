import React from 'react'
import { Paper, Typography } from '@material-ui/core'


class VideoDetail extends React.Component {


    render(){

        // const { videoId, title, channelTitle, description } = this.props

        if(!this.props.video) return <div className='loading'>Loading...</div>

        const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`


        return(
            <React.Fragment>
                <Paper elevation={6} style={{ height: '80%' }} >
                    <iframe frameBorder='0' height='100%' width='100%'  title='Video Player' src={videoSrc} />
                </Paper>
                <Paper elevation={6} style={{ padding: '5px' }} >
                    <Typography variant='h4'>{this.props.video.snippet.title} - {this.props.video.snippet.channelTitle}</Typography>
                    <Typography variant='subtitle1'>{this.props.video.snippet.channelTitle}</Typography>
                    <Typography variant='subtitle2'>{this.props.video.snippet.description}</Typography>
                </Paper>
                <button onClick={(event) => {
                    this.props.createFavVideo(this.props.video.snippet.title, videoSrc)
                    this.props.toggleFavorited()
                    }} className='favorite-btn'>
                    Add to Favorites {this.props.favorited ? '💚' : '♡'}
                </button>


            </React.Fragment>
        );
    }
}


export default VideoDetail