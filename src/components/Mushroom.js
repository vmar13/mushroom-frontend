import React from 'react'
import { Link } from 'react-router-dom'

class Mushroom extends React.Component {

    handleMouseOver = e => {
        if(e.target.className === 'mush-img') {
            document.querySelector('.coffee').style.opacity = '1'
        }
    }

    handleMouseOut = e => {
        if(e.target.className === 'mush-img') {
            document.querySelector('.coffee').style.opcacity = '0'
            console.log('out')
        }
    }

    render() {

        const { id, name, image_url, onMouseEnter, onMouseLeave } = this.props

        return(
            <div className='card'>
                <div className='mush-index-single-mush' >
                    <Link to = {`/mushrooms/${id}`}> <img src={'http://localhost:3000' + image_url} alt={name} className='mush-img' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  /> </Link>
                    
                </div>

                <div className='name-container'>
                <h3>{name}</h3>
                <iframe src="https://giphy.com/embed/L3KJjjqtoyzCuIVF7e" width="480" height="480" frameBorder="0" className='coffee' allowFullScreen></iframe><p><a href="https://giphy.com/stickers/selfcare-mindfulness-caylinperry-L3KJjjqtoyzCuIVF7e"></a></p>

                </div>
            
            </div>
        )
    }
}

export default Mushroom

{/* <div className='card' onClick={() => sendToMushShowPage(id)}> */}
