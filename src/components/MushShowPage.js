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
            this.setState({ 
                mushroom: mushObj,
                healthBenefits: mushObj.health_benefits
            })
        })
    }
    render() {
        console.log(this.state)
        const { mushroom, healthBenefits } = this.state
        return(
            <div className='flex-column'>
                <div className='card'>
                    <img src={mushroom.image} alt={mushroom.name} className='mush-img'/>
                    <h3>{mushroom.name}</h3>
                    <p><em>Scientific Name: {mushroom.scientific_name}</em></p>
                    <p>Location: {mushroom.location}</p>
                    <p>Tea flavor: {mushroom.flavor}</p>
                    <br>
                    </br>
                    {healthBenefits.map(healthBenefit => <HealthBenefit key={healthBenefit.id} healthBenefit={healthBenefit} />)}
                 </div>
            </div>
        )
    }
}

export default MushShowPage