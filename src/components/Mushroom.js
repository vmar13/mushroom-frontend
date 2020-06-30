import React from 'react'
import { Link } from 'react-router-dom'

class Mushroom extends React.Component {
    render() {

        const { id, name, image_url } = this.props

        return(
            <div className='card' >
                <Link to = {`/mushrooms/${id}`}> <img src={'http://localhost:3000' + image_url} alt={name} className='mush-img'/> </Link>
                <div className='name-container'>
                    <h3>{name}</h3>
                </div>
            
            </div>
        )
    }
}

export default Mushroom

{/* <div className='card' onClick={() => sendToMushShowPage(id)}> */}
