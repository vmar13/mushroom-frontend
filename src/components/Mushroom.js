import React from 'react'
import { Link } from 'react-router-dom'

class Mushroom extends React.Component {

    // handleMouseOver = e => {
    //     if(e.target.className === 'mush-img') {
    //         <iframe src="https://giphy.com/embed/L3KJjjqtoyzCuIVF7e" width="480" height="480" frameBorder="0" className='coffee' allowFullScreen></iframe><p><a href="https://giphy.com/stickers/selfcare-mindfulness-caylinperry-L3KJjjqtoyzCuIVF7e"></a></p>
    //     }
    // }

    render() {

        const { id, name, image_url } = this.props

        return(
            <div className='card'>
                <div className='mush-index-single-mush'>
                    <Link to = {`/mushrooms/${id}`}> <img src={'http://localhost:3000' + image_url} alt={name} className='mush-img'/> </Link>
                    
                </div>

                <div className='name-container'>
                <h3>{name}</h3>
                {/* <img src={'https://media.giphy.com/media/L3KJjjqtoyzCuIVF7e/giphy.mp4'} className='coffee'/> */}
                <iframe src="https://giphy.com/embed/L3KJjjqtoyzCuIVF7e" width="480" height="480" frameBorder="0" className='coffee' allowFullScreen></iframe><p><a href="https://giphy.com/stickers/selfcare-mindfulness-caylinperry-L3KJjjqtoyzCuIVF7e"></a></p>

                </div>
            
            </div>
        )
    }
}

export default Mushroom

{/* <div className='card' onClick={() => sendToMushShowPage(id)}> */}
