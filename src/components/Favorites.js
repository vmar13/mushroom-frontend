import React from 'react'
import FavVideoItem from '../components/FavVideoItem'

class Favorites extends React.Component {

   

    render() {

        const { deleteVideo } = this.props
        // console.log(this.props.videos)

        return(
            <div className='popular'>
                <h2>My Favorites</h2>
                {this.props.videos.map(video => <FavVideoItem key={video.id} video={video} deleteVideo={deleteVideo} />)}
            </div>
        )
    }
}

export default Favorites