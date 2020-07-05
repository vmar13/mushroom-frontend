import React from 'react'

class HealthBenefit extends React.Component {

  

    render() {

        const { name } = this.props.healthBenefit 

        // console.log(this.props)
        return(
            <div>
                <li>{name}</li><br></br>
            </div>
        )
    }
        
}

export default HealthBenefit