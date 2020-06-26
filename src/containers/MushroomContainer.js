import React from 'react'
import Mushroom from '../components/Mushroom'
import Dropdown from '../components/Dropdown'

const API_mushrooms =  'http://localhost:3000/api/v1/mushrooms'
const API_health_benefits = 'http://localhost:3000/api/v1/health_benefits'

class MushroomContainer extends React.Component {

    state = {
        mushrooms: [],
        healthBenefits: [],
        selectedValue: '',
        filter: 'Select Item'
    }

    componentDidMount() {
        fetch(API_mushrooms)
        .then(res => res.json())
        .then(mushData => {
            this.setState({ mushrooms: mushData })
        })
        .then(fetch(API_health_benefits)
        .then(res => res.json())
        .then(healthBenes => {
            this.setState({ healthBenefits: healthBenes })
        }))
    }

    sendToMushShowPage = mushId => {
        this.props.history.push(`/mushrooms/${mushId}`)
    }

    handleSelectChange = event => {
        // console.log(event.target.value)
        if(event.target.value === '') { 
            return (
            fetch(API_mushrooms)
            .then(res => res.json())
            .then(mushData => {
                this.setState({ mushrooms: mushData })
            }))
        }
            fetch(`${API_health_benefits}/${event.target.value}`)
            .then(res => res.json())
            .then(healthBene => {
                // console.log(healthBene)
                this.setState({ mushrooms: healthBene.mushrooms })
        })
            
    }

        // handleSelectChange = selectedHealthBene => {
        //     this.setState({ selectedValue: selectedHealthBene})        
        //     const id =

        // }

        // .then(healthBeneObj => {
        //     this.setState({ mushrooms: healthBeneObj.mushrooms })
        // })
    // }

    // handleSelectChange = selectedHealthBeneId => {
    //     this.setState({
    //         selectedValue: selectedHealthBeneId
    //     })
    //     let healthBeneId = this.state.selectedValue 
    //     fetch(`http://localhost:3000/api/v1/mush_health_benefits`)
    //     .then(res => res.json())
    //     .then(mushHealthArr => {
    //         let mushArr = mushHealthArr.filter(mHobj => mHobj.health_benefit.name === healthBeneId)
    //         this.setState({ mushrooms: mushArr})
    //     })
    // }

    render() {
        console.log(this.state)
     
        return(
            <div>
                <h3 className='filter-title'>Filter by health benefit:</h3>
                <Dropdown healthBenefits={this.state.healthBenefits} onSelectChange={this.handleSelectChange} /> <br /><br />
                <div className='container'>
                {this.state.mushrooms.map(mushroom => <Mushroom key={mushroom.id} {...mushroom} sendToMushShowPage={this.sendToMushShowPage}/>)}
                </div>
            </div>
            
            )
    }
}

export default MushroomContainer

