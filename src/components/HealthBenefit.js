import React from 'react'

class HealthBenefit extends React.Component {

  

    render() {

        const { name } = this.props.healthBenefit 

        // console.log(this.props)
        return(
            <div className='health-bene-item'>
                <div className='health-bene-name'>
                    <strong>{name}</strong>
                </div>
                {name === 'immune system boost' ? <img src={require("../images/immune-system.png")} alt="icon" className='icon' /> : null}
                {name === 'cancer-fighting effects' ? <img src={require("../images/cancer.png")} alt="icon" className='icon' /> : null}
                {name === 'anti-viral effects' ? <img src={require("../images/antiviral.png")} alt="icon" className='icon' /> : null}
                {name === 'blood glucose regulation' ? <img src={require("../images/diabetes.png")} alt="icon" className='icon' /> : null}
                {name === 'lower cholesterol' ? <img src={require("../images/cholesterol.png")} alt="icon" className='icon' /> : null}
                {name === 'improved brain function' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'reduced depression & anxiety' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'liver health' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'performance-enhancing effects' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'asthma relief' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'gut health' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'HPV-fighting effects' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'lower high blood pressure' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'improved ovulation PCOS' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'prevent gingivitis' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
                {name === 'lower risk of prostate cancer' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
            </div>

        )
    }
        
}

export default HealthBenefit

{/* <div className='health-bene-item'>
{name}
{name === 'immune system boost' ? <img src={require("../images/immune-system.png")} alt="icon" className='icon' /> : null}
{name === 'cancer-fighting effects' ? <img src={require("../images/cancer.png")} alt="icon" className='icon' /> : null}
{name === 'anti-viral effects' ? <img src={require("../images/antiviral.png")} alt="icon" className='icon' /> : null}
{name === 'blood glucose regulation' ? <img src={require("../images/diabetes.png")} alt="icon" className='icon' /> : null}
{name === 'lower cholesterol' ? <img src={require("../images/cholesterol.png")} alt="icon" className='icon' /> : null}
{name === 'improved brain function' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'reduced depression & anxiety' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'liver health' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'performance-enhancing effects' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'asthma relief' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'gut health' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'HPV-fighting effects' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'lower high blood pressure' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'improved ovulation PCOS' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'prevent gingivitis' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
{name === 'lower risk of prostate cancer' ? <img src={require("../images/speaker.png")} alt="icon" className='icon' /> : null}
</div> */}