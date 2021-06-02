import React from 'react';

const SearchBar = (props) => {
    const { onSubmit, onChange } = props; 

    return(
        <>
            <form onSubmit={onSubmit}  className='search'>
                <input type='text' placeholder='Search...' onChange={onChange} />
                <img src={require("../images/search.png")} alt="listen" className='search-magnifying-glass' />
            </form>
            <img src={require("../images/mush-excited.gif")} alt="listen" className='mush-excited' />
        </>
    )

}

export default SearchBar;
