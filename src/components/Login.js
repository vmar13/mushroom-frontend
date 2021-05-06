import React from 'react'

const Login = ({ username, password, onChange, onSubmit }) => {
    return(
        <div className='login-container'>
            <img src={require('../images/turkey_tail_login_edited.jpg')} alt='cover' className='login-image' />
            <img src={require("../images/F_in_Tea5.png")} alt="logo" className='logo-title' />


            <div className='login-form'>
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <label><strong>Username</strong></label><br></br>
                    <input type='text' name='username' value={username} onChange={onChange} /><br></br>
                    <br></br>
                    <label><strong>Password</strong></label><br></br>
                    <input type='password' name='password' value={password} onChange={onChange} /><br></br>
                    <input type="submit" value="Log in" className='login-btn' />
                    <a href='#' className='fake-signup'>Don't have an account? Sign up</a>
                </form>
            </div>
        </div>
    )
}

export default Login
