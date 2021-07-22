import React from 'react';

const SearchBar = ({ onSubmit, onChange }) => {
    return(
        <div>
            <form onSubmit={onSubmit}  className='search'>
                <h4 className='search-instructions'>Find YouTube videos on how to brew your own mushroom tea. Ex: "How to make reishi tea"</h4>
                <input type='text' placeholder='Search...' onChange={onChange} />
                <img src={require("../images/search.png")} alt="listen" className='search-magnifying-glass' />
            </form>
            <img src={require("../images/mush-excited.gif")} alt="listen" className='mush-excited' />
        </div>
    );
};

export default SearchBar;
