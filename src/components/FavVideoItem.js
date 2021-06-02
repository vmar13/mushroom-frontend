import React from 'react';


const FavVideoItem = ({ video, deleteVideo }) => {

    return(
        <div className='fav-video-item'>
            {<iframe title='frame' width="560" height="315" src={video.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
            <button onClick={() => deleteVideo(video.id)} className='fav-delete-btn'>Delete <img alt='trash' className="trash" src={require("../images/trash.png")}/></button>  
        </div>
    ); 
};

export default FavVideoItem;