import React from 'react'

const Login = ({ username, password, onChange}) => {
    return(
        <div className='home'>
            <h2>Login/Sign Up</h2>
            <form>
                <label>Username</label><br></br>
                <input name='username' value={username} onChange={onChange} /><br></br>
                <br></br>
                <label>Password</label><br></br>
                <input name='password' value={password} onChange={onChange} /><br></br>
                <br></br>
                <input type="submit" value="Log in" />
            </form>
        </div>
    )
}

export default Login