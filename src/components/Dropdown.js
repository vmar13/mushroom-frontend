import React from 'react';

const Dropdown = ({ healthBenefits, onSelectChange }) => {

    let options = healthBenefits.map( healthBene => 
        <option
            key={healthBene.id}
            value={healthBene.id}
            >
                {healthBene.name}
            </option>
        )

    return (
        <select className="dropdown-select" onChange={onSelectChange}>
            <option value='' className='dropdown-individual-option'>All</option>
            {options}
        </select>
    );
};

export default Dropdown;