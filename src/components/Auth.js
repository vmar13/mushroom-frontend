import React from 'react'
import Login from '../components/Login'

const usersURL =  `http://localhost:3000/api/v1/users`

class Auth extends React.Component {

    state = {
        username: '',
        password: '',
        users: []
    }

    componentDidMount() {
        fetch(usersURL)
            .then(resp => resp.json())
            .then(usersData => { 
                this.setState({ users: usersData })
            })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = e => {
        const { username, password } = this.state;

        let currentUser = this.state.users.find(user => {
                return user.username === username && user.password === password
            })
                if(currentUser != null) {
                    this.props.updateUser(currentUser)
                    this.props.history.push('mushrooms')
                }
                
    }
    

//when hit login, consider if that user exists with a find_by (which returns object)
  //when you hit login, setState of currentUser with user object (username AND password)
  //after hit login, link to mush index page
  //if user doesn't exist OR wrong info, create alert 
  //create sign up page =>  /signup
  //signup page will create a user (POST request)

    render(){
        return(
            <Login username={this.state.username} password={this.state.password} onChange={this.handleChange} onSubmit={this.handleLogin} />
        )
    }
}

export default Auth