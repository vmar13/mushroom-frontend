import React from 'react';
import { Redirect } from 'react-router';

class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        displayError: ''
    };

    handleChange = e =>  {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                if(!data.jwt){
                    this.setState({ displayError: data.error });
                } else {
                    this.props.updateUsername(data.user.username);
                    localStorage.clear();
                    const userInfo = {
                        'id': data.user.id,
                        'username': data.user.username,
                        'token': data.jwt
                    }
                    localStorage.setItem('user', JSON.stringify(userInfo));
                    this.props.toggleLoggedIn();
                };
            });
    };
    
    render(){
        const { username, password, displayError } = this.state;

        return(
            <>
            <div className='login-container'>
            <img src={require('../images/turkey_tail_login_edited.jpg')} alt='cover' className='login-image' />

                <div className='login-form'>
                    <form onSubmit={this.handleSubmit}>
                        <img src={require("../images/F_in_Tea5.png")} alt="logo" className='logo-title' />
                        <input type='text' name='username' value={username} onChange={this.handleChange} placeholder='Username'/><br/>
                        <input type='password' name='password'value={password} onChange={this.handleChange} placeholder='Password'/><br/>
                        <input type='submit' value='Sign Up' className='login-btn' /><br/><br/>
                        <p className='auth'>Already have an account? <a href='/login'>Log In</a></p>
                        {this.props.loggedIn ? <Redirect to='/mushrooms' /> : null}
                        {displayError ? <p className='login-error-msg'>{displayError}</p> : null }
                    </form>

                    
                </div>
            </div>  
            </>
        );
    };
};

export default SignUp;