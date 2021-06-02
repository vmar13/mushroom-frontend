import React from 'react';
import { Link } from 'react-router-dom';

class Mushroom extends React.Component {
    
    state = {
        showMug: false
    };

    handleMouseOver = e => {
        this.setState({ showMug: true }); 
    };

    handleMouseOut = e => {
        this.setState({ showMug: false });
    };

    render() {
        const { id, name, image_url } = this.props;

        return(
            <div className='card'>
                <div className='mush-index-single-mush' >
                    <Link to={`/mushrooms/${id}`}> 
                        <img src={'http://localhost:3000' + image_url} alt='mush-img' className='mush-img' onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} /> 
                    </Link>
                </div>

                <div className='name-container'>
                <h3>{name}</h3>
                {this.state.showMug ? <img src={require("../images/white-mug.gif")} alt='white-mug'  className='coffee' /> : null} 
                </div>
            </div>
        );
    };
};

export default Mushroom;
