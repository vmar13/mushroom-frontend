import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        displayError: ''
    };

    handleChange = e =>  {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault()

        fetch('http://localhost:3000/api/v1/login', {
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
                    this.setState({ displayError: data.error })
                } else {
                    console.log(data)
                    this.props.updateUsername(data.user.username)
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
        const { username, password } = this.state;

        return(
            <>
            <div className='login-container'>
            <img src={require('../images/turkey_tail_login_edited.jpg')} alt='cover' className='login-image' />
            <img src={require("../images/F_in_Tea5.png")} alt="logo" className='logo-title' />

                <div className='login-form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='username' value={username} onChange={this.handleChange} placeholder='Username'/><br/>
                        <input type='password' name='password'value={password} onChange={this.handleChange} placeholder='Password'/><br/>
                        <input type='submit' value='Log In' className='login-btn' /><br/><br/>
                        <p className='auth'>Don't have an account? <a href='/signup'>Sign Up</a></p>
                    </form>
                    {this.props.loggedIn ? <Redirect to='/mushrooms' /> : null}
                    {this.state.displayError ? <p className='error-message'>{this.state.displayError}</p> : null }
                </div>
            </div>
            </>
        );
    };
};

export default Login;
