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

    // sendToMushShowPage = mushId => {
    //     this.props.history.push(`/mushrooms/${mushId}`)
    // }

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

    handleMouseOver = e => {
        if(e.target.className === 'mush-img') {
            document.querySelector('.coffee').style.opacity = '1'
        }
    }

    handleMouseOut = e => {
        if(e.target.className === 'mush-img') {
            document.querySelector('.coffee').style.opcacity = '0'
            // console.log('out')
        }
    }


    render() {
     
        return(
            <div className='mush-index-body'>
                <div className='banner'>
                    <h2>banner</h2>
                </div>
                <div className='mush-cont-body'>
                    <div className='filter-dropdown'>
                        <h3>Filter by medicinal benefit:</h3>
                        <Dropdown healthBenefits={this.state.healthBenefits} onSelectChange={this.handleSelectChange} /> <br /><br />
                    </div>
                    
                    <div id='container'>
                        <div className='mushroom-iteration-container'>
                            {this.state.mushrooms.map(mushroom => <Mushroom key={mushroom.id} {...mushroom} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} />)}
                        </div>
                        {/* <div className='disclaimer-container'>disclaimer goes here</div> */}
                    </div>

                    {/* <div className='disclaimer-container'>
                        <h4>Disclaimer</h4>
                        <p>Always speak with your healthcare provider before making any changes to your diet.</p>
                    </div> */}
                </div>
            </div>
            
            )
    }
}

export default MushroomContainer

// {this.state.mushrooms.map(mushroom => <Mushroom key={mushroom.id} {...mushroom} sendToMushShowPage={this.sendToMushShowPage}/>)}

