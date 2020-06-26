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

    // componentDidMount() {
    //     fetch(API_mushrooms)
    //     .then(res => res.json())
    //     .then(mushData => {
    //         this.setState({ mushrooms: mushData })
    //     })
    //     .then(fetch('http://localhost:3000/api/v1/mush_health_benefits')
    //     .then(res => res.json())
    //     .then(mushHealthBenes => {
    //         const healthBeneOptions = mushHealthBenes.map(mHb => (mHb.health_benefit.name))
    //         // console.log(healthBeneOptions)
    //         this.setState({ healthBenefits: healthBeneOptions })
    //     }))
    // }

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
            .then(data => {
                this.setState({ mushrooms: data.mushrooms })
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

    // updateFilter = type => {
    //     this.setState({ filter: type })
    // }

    // displayFilteredMush = () => {
    //     let filteredMushrooms = [...this.state.mushrooms]
    //     if(this.state.filter !== 'Select Item') {
    //         filteredMushrooms = filteredMushrooms.filter(mush => mush.health_benefit === this.state.filter)
    //     }
    // }

    // let mushArrNotYet = mushHealthArr.filter(mHobj => mHobj.health_benefit.name === selectedHealthBeneId)
    // let mushArr = mushArrNotYet.map(mushObj => mushObj.mushroom)
    // this.setState({ mushrooms: mushArr})

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
        // const filterMushrooms = this.state.mushrooms.filter(mushroom => console.log(mushroom))
            // mushroom.health_benefit.name === this.state.selectedValue)
        // console.log(filterMushrooms)
        // let displayMush = this.displayFilteredMush()


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

