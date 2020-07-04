import React from 'react';


const FavVideoItem = ({ video, deleteVideo }) => {
console.log(video)
    return(
        <div>
            {<iframe width="560" height="315" src={video.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
            <button onClick={() => deleteVideo(video.id)}>Delete</button>  

        </div>
    ) 
}

export default FavVideoItem