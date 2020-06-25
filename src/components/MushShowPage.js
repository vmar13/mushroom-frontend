import React from 'react'
// import Mushroom from '../components/Mushroom'
// import HealthBenefit from '../components/HealthBenefit'
// import Comments from '../components/Comments'

const API_ENDPOINT = `http://localhost:3000/api/v1/mushrooms`

class MushShowPage extends React.Component {

    state = {
        mushroom: {}
    }

    componentDidMount() {
        fetch(`${API_ENDPOINT}/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(mushObj => {
            this.setState({ mushroom: mushObj})
        })
    }
    render() {
        console.log(this.state)
        return(
            <div className='flex-column'>
                <div className='card'>
                    <img src={this.state.mushroom.image} alt={this.state.mushroom.name} className='mush-img'/>
                    <h3>Name: {this.state.mushroom.name}</h3>
                    <h3>Scientific Name: {this.state.mushroom.scientific_name}</h3>
                    <h3>Location: {this.state.mushroom.location}</h3>
                    <h3>Tea flavor: {this.state.mushroom.flavor}</h3>
                    <br>
                    </br>
                 </div>
            </div>
        )
    }
}

export default MushShowPage