import React from 'react'
// import Mushroom from '../components/Mushroom'
import HealthBenefit from '../components/HealthBenefit'
// import Comments from '../components/Comments'

const API_ENDPOINT = `http://localhost:3000/api/v1/mushrooms`

class MushShowPage extends React.Component {

    state = {
        mushroom: {},
        healthBenefits: []
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
                    <img src={`http://localhost:3000/${this.state.mushroom.image_url}`} alt={this.state.mushroom.name} className='mush-img'/>
                    <h3>{this.state.mushroom.name}</h3>
                    <p><em>Scientific Name: {this.state.mushroom.scientific_name}</em></p>
                    <p>Location: {this.state.mushroom.location}</p>
                    <p>Tea flavor: {this.state.mushroom.flavor}</p>
                    <br>
                    </br>
                    <HealthBenefit />
                 </div>
            </div>
        )
    }
}

export default MushShowPage