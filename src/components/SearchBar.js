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

                // <Paper elevation={6} style={{ padding: '25px' }}>
                    <form onSubmit={this.handleSubmit}  className='search'>
                        {/* <TextField style={{ padding: '1px 40px' }} fullWidth onChange={this.handleChange} /> */}
                        <input type='text' placeholder='Search...' onChange={this.handleChange} />
                    </form>
                // </Paper>
          
        )
    }
}

export default SearchBar

// style={{ "textAlign": "center", "background": "gray", "padding": "35px" }}

  {/* <div className="wrap">
                    <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search for videos" />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                    </div>
                </div> */}