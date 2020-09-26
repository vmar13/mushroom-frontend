import React from 'react'
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends React.Component {

    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }
    
    handleSubmit = (event) => {
        const { searchTerm } = this.state 
        const { onSubmit } = this.props  

        onSubmit(searchTerm)

        event.preventDefault()
    }

    render() {
        return(
            <>
                    <form onSubmit={this.handleSubmit}  className='search'>
                        {/* <TextField style={{ padding: '1px 40px' }} fullWidth onChange={this.handleChange} /> */}
                        <input type='text' placeholder='Search...' onChange={this.handleChange} />
                        <img src={require("../images/search.png")} alt="listen" className='search-magnifying-glass' />
                    </form>
                    <img src={require("../images/mush-excited.gif")} alt="listen" className='mush-excited' />
            </>
        )
    }
}

export default SearchBar
