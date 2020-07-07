import React from 'react'
import FavVideoItem from '../components/FavVideoItem'

class Favorites extends React.Component {

   

    render() {

        const { deleteVideo } = this.props
        // console.log(this.props.videos)

        return(
            <div className='popular'>
                <h1 className='favorites-title'>My Favorites</h1>
                {this.props.videos.map(video => <FavVideoItem key={video.id} video={video} deleteVideo={deleteVideo} />)}
            </div>
        )
    }
}

export default Favorites