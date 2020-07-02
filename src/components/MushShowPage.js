import React from 'react'
// import Mushroom from '../components/Mushroom'
import HealthBenefit from '../components/HealthBenefit'
import SourcesContainer from '../containers/SourcesContainer'
import CommentForm from './CommentForm'
import CommentsContainer from '../containers/CommentsContainer'

const API_MUSHROOMS = `http://localhost:3000/api/v1/mushrooms`
const API_COMMENTS = `http://localhost:3000/api/v1/comments`

class MushShowPage extends React.Component {

    state = {
        mushroom: {},
        healthBenefits: [],
        sources: [],
        comments: [],
        users: [],
        content: '',
        displaySources: true,
        currentComment: ''
    }

    //fetch mushroomANDHealthBenes
    getMushAndHB = () => {
        fetch(`${API_MUSHROOMS}/${this.props.mushId}`)
        .then(res => res.json())
        .then(mushObj => {
            this.setState({ 
                mushroom: mushObj,
                healthBenefits: mushObj.health_benefits
                // comments: mushObj.comments
            })
        })
    }

    getComments = () => {
        fetch('http://localhost:3000/api/v1/comments')
        .then(res => res.json())
        .then(commentsData => {
            let commentArr = commentsData.filter(comment => {
                if (comment.mushroom_id === this.props.mushId) {
                return comment
            
                } else {
                    return null 
                }
            })
            this.setState({ comments: commentArr })
        })
    }

    getUsers = () => {
        fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(usersData => {
            let userArr
            userArr = usersData.filter(user => {
                if (user.mushrooms.map(mushroom => mushroom.id === this.props.mushId)) {
                    return userArr
                } else {
                    return null
                }
            })
            this.setState({ users: userArr })
        })
    }

    //fetch all comments and map comment that matches mushroom_id
    //comment.mushroom.id === this.props.mushId
    //comment.user.username

      getSources = () => {
        fetch(`http://localhost:3000/api/v1/mush_health_benefits`)
        .then(res => res.json())
        .then(mushHealthBenes => {
            let mushHB = mushHealthBenes.filter(mushHB => mushHB.mushroom.name === this.state.mushroom.name)
            let sourcesAoA = mushHB.map(mushHealthObj => mushHealthObj.sources)  
            let citAoA = sourcesAoA.map(arr => arr.map(arrObj => arrObj)) 

            this.setState({ sources: citAoA }) 
        })
    }

        addNewUser = newUser => {
            this.setState({
                users: [...this.state.users, newUser]
            })
        }

        addNewComment = newComment => { 
            this.setState({
              comments: [...this.state.comments, newComment]
            })
          }

        handleChange = event => {
            this.setState({ [event.target.name]: event.target.value })
        }

            handleSubmit = event => {
                event.preventDefault()
                const { currentUser } = this.props
                if(currentUser !== null) {
                    const newComment = {
                        user_id: currentUser.id,
                        mushroom_id: this.state.mushroom.id,
                        content: this.state.content
                    }
                
                    fetch(`${API_COMMENTS}`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify(newComment)
                    })
                      .then(res => res.json())
                      .then(newComment => {
                        this.addNewComment(newComment)
                        this.addNewUser((newComment || {}).user)
    
                      })
                      .then( () => this.setState({ content: '' }))
                  }
                } 


        
          toggleSources = () => {
              this.setState({ displaySources: !this.state.displaySources })
          }

          componentDidMount() {
            this.getMushAndHB()
            this.getSources()
            this.getComments()
            this.getUsers()
        }

    render() {
        console.log(this.state.comments)

        const { mushroom, healthBenefits } = this.state

    let timeout;
    
    const myTimer = () => {
        window.speechSynthesis.pause()
        window.speechSynthesis.resume()
        
        timeout = setTimeout(myTimer, 10000000)
    }

    window.speechSynthesis.cancel();
    timeout = setTimeout(myTimer, 10000000)
    let voices = window.speechSynthesis.getVoices()
    let toSpeak = this.state.mushroom.scientific_name
  

    let utt = new SpeechSynthesisUtterance(toSpeak);
    utt.onend =  () => { clearTimeout(timeout) }

    let speak = () => {
        utt.voice = voices[28]
        utt.volume = 0.1
        utt.pitch = 0.8
        utt.rate = .7

        window.speechSynthesis.cancel()? 
        window.speechSynthesis.resume() : window.speechSynthesis.speak(utt)
    }

    // console.log("comments", this.state.comments)

        return(
            <div className='flex-column'>
                <div className='card'>
                    <img src={mushroom.image} alt={mushroom.name} className='mush-img'/>
                    <h3>{mushroom.name}</h3>
                    <p><em>Scientific Name: {mushroom.scientific_name}</em></p>
                    <img src={require("../images/listen.png")} alt="listen" className='listen' onClick={speak}/>
                    <p>Location: {mushroom.location}</p>
                    <p>Tea flavor: {mushroom.flavor}</p>
                    <br>
                    </br>
                    <h3>Health Benefits</h3>
                    {healthBenefits.map(healthBenefit => <HealthBenefit key={healthBenefit.id} healthBenefit={healthBenefit} />)} <br /><br />
                    {/* {this.state.sources.map(source => <p>{source}</p>)} */}
                    <h3>Sources</h3>
                    <button onClick={this.toggleSources}>{this.state.displaySources ? '-' : '+' }</button>
                    {this.state.displaySources ? 
                    <SourcesContainer 
                    sources={this.state.sources} 
                    /> : null}
                    <CommentForm 
                    content={this.state.content} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    />
                    <br /><br />
                    <CommentsContainer currentUser={this.props.currentUser} comments={this.state.comments} />
                 </div>
            </div>
        )
    }
}

export default MushShowPage