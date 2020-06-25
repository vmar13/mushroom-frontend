import React from 'react'
import Mushroom from '../components/Mushroom'
import Dropdown from '../components/Dropdown'

class MushroomContainer extends React.Component {

    state = {
        mushrooms: [],
        healthBenefits: [],
        selectedValue: 'Nothing selected'
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/mushrooms')
        .then(res => res.json())
        .then(mushData => {
            this.setState({ mushrooms: mushData })
        })
        .then(fetch('http://localhost:3000/api/v1/health_benefits')
        .then(res => res.json())
        .then(healthBenes => {
            this.setState({ healthBenefits: healthBenes})
        }))
    }

    sendToMushShowPage = mushId => {
        this.props.history.push(`/mushrooms/${mushId}`)
    }

    handleSelectChange = selectedValue => {
        this.setState({
            selectedValue: selectedValue
        })  
    }

    // displayHealthBeneName = () => {
    //     this.state.healthBenefits.map(healthBene => <option value={healthBene.name}>{healthBene.name}</option>)
    // }

    render() {
        console.log(this.state)
        return(
            <div>
                <h3>Filter by health benefit</h3>
                <Dropdown healthBenefits={this.state.healthBenefits} onSelectChange={this.handleSelectChange} /> <br /><br />
                <div className='container'>
                {this.state.mushrooms.map(mushroom => <Mushroom key={mushroom.id} {...mushroom} sendToMushShowPage={this.sendToMushShowPage}/>)}
                </div>
            </div>
            
            )
    }
}

export default MushroomContainer

