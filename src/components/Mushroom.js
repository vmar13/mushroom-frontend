import React from 'react'
import { Link } from 'react-router-dom'

class Mushroom extends React.Component {

    state = {
        showMug: false
    }

    handleMouseOver = e => {
        this.setState({ showMug: true })
        
    }

    handleMouseOut = e => {
        this.setState({ showMug: false })
    }

    render() {

        const { id, name, image_url, onMouseEnter, onMouseLeave } = this.props

        return(
            <div className='card'>
                <div className='mush-index-single-mush' >
                    <Link to = {`/mushrooms/${id}`}> <img src={'http://localhost:3000' + image_url} alt={name} className='mush-img' onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}  /> </Link>
                    
                </div>

                <div className='name-container'>
                <h3>{name}</h3>
                {this.state.showMug ? <iframe src="https://giphy.com/embed/L3KJjjqtoyzCuIVF7e" width="480" height="480" frameBorder="0" className='coffee' allowFullScreen></iframe>: null} <p><a href="https://giphy.com/stickers/selfcare-mindfulness-caylinperry-L3KJjjqtoyzCuIVF7e"></a></p> 

                </div>
            
            </div>
        )
    }
}

export default Mushroom
