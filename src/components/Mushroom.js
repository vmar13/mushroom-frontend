import React from 'react'

class Mushroom extends React.Component {
    render() {

        const { id, name, scientific_name, location, flavor, image_url, sendToMushShowPage } = this.props

        return(
            <div className='card' onClick={() => sendToMushShowPage(id)}>
                <img src={'http://localhost:3000' + image_url} alt={name} className='mush-img'/>
                <div className='name-container'>
                    <h3>{name}</h3>
                    {/* <p><em>{scientific_name}</em></p>
                    <p>{location}</p>
                    <p>{flavor}</p> */}

                </div>
            
            </div>
        )
    }
}

export default Mushroom