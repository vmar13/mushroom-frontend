import React from 'react'
// import Mushroom from '../components/Mushroom'
import HealthBenefit from '../components/HealthBenefit'
import Sources from '../components/Sources'
import CommentForm from './CommentForm'
import CommentsContainer from './CommentsContainer'

const API_MUSHROOMS = `http://localhost:3000/api/v1/mushrooms`
const API_COMMENTS = `http://localhost:3000/api/v1/comments`

class MushShowPage extends React.Component {

    state = {
        mushroom: {},
        healthBenefits: [],
        sources: [],
        comments: [],
        content: ''
    }

    //fetch mushroomANDHealthBenes
    getMushAndHB = () => {
        fetch(`${API_MUSHROOMS}/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(mushObj => {
            this.setState({ 
                mushroom: mushObj,
                healthBenefits: mushObj.health_benefits,
                comments: mushObj.comments
            })
        })
    }

    getSources = () => {
        fetch(`http://localhost:3000/api/v1/mush_health_benefits`)
        .then(res => res.json())
        .then(mushHealthBenes => {
            let mushHB = mushHealthBenes.filter(mushHB => mushHB.mushroom.name === this.state.mushroom.name)
            let sourcesAoA = mushHB.map(mushHealthObj => mushHealthObj.sources)  
            let citAoA = sourcesAoA.map(arr => arr.map(arrObj => arrObj.citation)) 
            // let array = citAoA.map(arr => arr.map(arrElement => console.log(arrElement)))
            let array = citAoA.map(arr => arr.map(arrElement => arrElement))

            console.log(array)
            this.setState({ sources: array }) 
        })
    }

        // getSources = () => {
        //     fetch(`http://localhost:3000/api/v1/mush_health_benefits`)
        //     .then(res => res.json())
        //     .then(mushHealthBenes => {
        //         let mushHB = mushHealthBenes.filter(mushHB => mushHB.mushroom.name === this.state.mushroom.name)
        //         let sourcesAoA = mushHB.map(mushHealthObj => mushHealthObj.sources)  
        //         let citAoA = sourcesAoA.map(arr => arr.map(arrObj => arrObj.citation)) 
        //         let array = citAoA.map(arr => arr.forEach(arrElement => console.log(arrElement)))
        //         console.log(array)
        //         this.setState({ sources: array }) 
        //     })
        // }

        //     getSources = () => {
        //     fetch(`http://localhost:3000/api/v1/mush_health_benefits`)
        //     .then(res => res.json())
        //     .then(mushHealthBenes => {
        //         let mushHB = mushHealthBenes.filter(mushHB => mushHB.mushroom.name === this.state.mushroom.name)
        //         let sourcesAoA = mushHB.map(mushHealthObj => mushHealthObj.sources) 
        //         let citAoA = sourcesAoA.map(arr => arr.map(arrObj => arrObj.citation)) 
 
        //         for (const arr of citAoA) {
        //             return arr.map(obj => {console.log(obj)})
        //         }

        //         this.setState({ sources: citAoA }) 
        //     })
        // }

        componentDidMount() {
            this.getMushAndHB()
            this.getSources()
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
        
            const newComment = {
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
              })
              .then( () => this.setState({ content: '' }))
          }

    render() {
        console.log(this.state)
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
        utt.rate = .8

        window.speechSynthesis.cancel()? 
        window.speechSynthesis.resume() : window.speechSynthesis.speak(utt)
    }


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
                    {healthBenefits.map(healthBenefit => <HealthBenefit key={healthBenefit.id} healthBenefit={healthBenefit} />)} <br /><br />
                    <Sources /> <br /><br />
                    <CommentForm 
                    content={this.state.content} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    />
                    <br /><br />
                    <CommentsContainer comments={this.state.comments} />
                 </div>
            </div>
        )
    }
}

export default MushShowPage