import React from 'react'
import Mushroom from '../components/Mushroom'

class MushroomContainer extends React.Component {

    state = {
        mushrooms: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/mushrooms')
        .then(res => res.json())
        .then(mushData => {
            this.setState({ mushrooms: mushData })
        })
    }

    sendToMushShowPage = mushId => {
        this.props.history.push(`/mushrooms/${mushId}`)
    }

    render() {
        // console.log(this.state)
        return(
            <div className='container'>
                {this.state.mushrooms.map(mushroom => <Mushroom key={mushroom.id} {...mushroom} sendToMushShowPage={this.sendToMushShowPage}/>)}
            </div>
            )
    }
}

export default MushroomContainer