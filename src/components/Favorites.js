import React from 'react'
import FavVideoItem from '../components/FavVideoItem'

class Favorites extends React.Component {

   

    render() {

        return(
            <div className='popular'>
                <h2>My Favorites</h2>
                {this.props.videos.map(video => <FavVideoItem key={video.id} video={video} />)}
            </div>
        )
    }
}

export default Favorites