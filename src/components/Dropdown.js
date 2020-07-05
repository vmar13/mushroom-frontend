import React from 'react'

class Dropdown extends React.Component {

    // handleChange = event => {
    //     let selectedValue = event.target.value;
    //     this.props.onSelectChange(selectedValue);
    // }

    render() {

        let healthBenefits = this.props.healthBenefits
        let options = healthBenefits.map( healthBene => 
            <option
                key={healthBene.id}
                value={healthBene.id}
                >
                    {healthBene.name}
                </option>
            )
        return (
            <select className="dropdown-select" onChange={this.props.onSelectChange}>
                <option value='' className='dropdown-individual-option'>All</option>
                {options}
           </select>
        )
    }
}

export default Dropdown