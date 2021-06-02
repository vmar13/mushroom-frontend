import React from 'react';
import FavVideoItem from '../components/FavVideoItem';

const Favorites = (props) => {
    const { videos, deleteVideo } = props;

    let noFavs;
    if (videos.length === 0) {
        noFavs = 'You don\'t have any favorites yet, so head over to "BYOT" and add some!'
    }
    
    return(
        <div className='popular'>
            <h1 className='favorites-title'>My Favorites</h1>
            <p>{noFavs}</p>
            {videos.map(video => <FavVideoItem key={video.id} video={video} deleteVideo={deleteVideo} />)}
        </div>
    )

}

export default Favorites;