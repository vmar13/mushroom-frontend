import React from 'react';


// import trash from '../images/trash.png'

// const trashIcon = trash


const FavVideoItem = ({ video, deleteVideo }) => {

console.log(video)
    return(
        <div className='fav-video-item'>
            {<iframe width="560" height="315" src={video.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
            <button onClick={() => deleteVideo(video.id)} className='fav-delete-btn'>Delete <img className="trash" src={require("../images/trash.png")}/></button>  

        </div>
    ) 
}

export default FavVideoItem