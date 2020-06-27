import React from 'react'

class HealthBenefit extends React.Component {

  

    render() {

        const { name } = this.props.healthBenefit 

        console.log(this.props)
        return(
            <div>
                {name}
            </div>
        )
    }
        
}

export default HealthBenefit