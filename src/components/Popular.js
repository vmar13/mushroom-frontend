import React from 'react'
import PopularVideoItem from '../components/PopularVideoItem'

class Popular extends React.Component {

   

    render() {

        return(
            <div className='popular'>
                <h2>Popular by Community</h2>
                <p>Here are some videos other mushroom tea lovers found helpful.</p>
                {this.props.videos.map(video => <PopularVideoItem key={video.id} video={video} />)}
            </div>
        )
    }
}

export default Popular