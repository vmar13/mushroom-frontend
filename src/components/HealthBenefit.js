import React from 'react'

class HealthBenefit extends React.Component {

  

    render() {

        const { name } = this.props.healthBenefit 

        // console.log(this.props)
        return(
            <div className='health-bene-item'>
                <li>{name}</li>
                {name === 'immune system boost' ? <img src={require("../images/speaker.png")} alt="listen" className='listen' /> : null}
                {/* {name} */}

            </div>
        )
    }
        
}

export default HealthBenefit