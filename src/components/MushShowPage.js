import React from 'react';
import HealthBenefit from '../components/HealthBenefit';
import SourcesContainer from '../containers/SourcesContainer';
import CommentForm from './CommentForm';
import CommentsContainer from '../containers/CommentsContainer';

const API_MUSHROOMS = `http://localhost:3000/api/v1/mushrooms`;
const API_COMMENTS = `http://localhost:3000/api/v1/comments`;

class MushShowPage extends React.Component {

    state = {
        mushroom: {},
        healthBenefits: [],
        sources: [],
        comments: [],
        content: '',
        displaySources: false,
        errors: {}
    };

    //Fetch mushroomANDHealthBenefits
    getMushAndHB = () => {
        fetch(`${API_MUSHROOMS}/${this.props.mushId}`)
        .then(res => res.json())
        .then(mushObj => {
            this.setState({ 
                mushroom: mushObj,
                healthBenefits: mushObj.health_benefits
            });
        });
    };

    //Fetch all comments and filter for only that mushroom's comments
    getComments = () => {
        fetch(API_COMMENTS)
        .then(res => res.json())
        .then(commentsData => {
            let commentArr = commentsData.filter(comment => {
                if (comment.mushroom_id === this.props.mushId) {
                return comment
                } else {
                    return null
                }
            })
            this.setState({ comments: commentArr });
        });
    };

    deleteComment = id => {
        fetch(`${API_COMMENTS}/${id}`, {
            method: 'DELETE',
        })
        this.setState({ comments: this.state.comments.filter(comment => comment.id !== id)});
    };

    getSources = () => {
        fetch(`http://localhost:3000/api/v1/mush_health_benefits`)
        .then(res => res.json())
        .then(mushHealthBenes => {
            let mushHB = mushHealthBenes.filter(mushHB => mushHB.mushroom.name === this.state.mushroom.name)
            let sourcesAoA = mushHB.map(mushHealthObj => mushHealthObj.sources)  
            let citAoA = sourcesAoA.map(arr => arr.map(arrObj => arrObj)) 

            this.setState({ sources: citAoA }); 
        });
    };

    addNewComment = newComment => { 
        this.setState({
            comments: [...this.state.comments, newComment]
        });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!this.state.content) {
            formIsValid = false;
            errors['content'] = 'Please write a comment.'
        }
        this.setState({ errors })
        return formIsValid;
    };

    //This creates a comment OR throws an error if content input is missing in form
    handleSubmit = event => {
        event.preventDefault();
        if (this.validateForm()) {
            const user = JSON.parse(localStorage.getItem('user'));
                const newComment = {
                    user_id: user.id,
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
                    .then(res => {
                        if(res.error) {
                            let errors = {};
                            errors['content'] = res.error
                            this.setState({ errors })
                        } else {
                            res.json()
                            .then(newComment => {
                            this.addNewComment(newComment)
                            this.getComments()
                            })
                            .then( () => this.setState({ content: '' }))
                        }
                    })
        }; 
    };
        
    toggleSources = () => {
        this.setState({ displaySources: !this.state.displaySources });
    };

    componentDidMount() {
        this.getMushAndHB();
        this.getSources();
        this.getComments();
    };

    render() {
        const { mushroom, healthBenefits, displaySources, sources, content, errors, comments } = this.state;

        //****** This handles the Web Speech API's Speech Synthesis *****//
        let voices = window.speechSynthesis.getVoices();
        let toSpeak = this.state.mushroom.scientific_name;
        let utt = new SpeechSynthesisUtterance(toSpeak);

        const pronounce = () => {
            utt.voice = voices[26];
            utt.volume = 0.3;
            utt.pitch = 0.9;
            utt.rate = .7;
            window.speechSynthesis.speak(utt);
        };

        //*************************************************//

        return(
            <div className='flex-column'>
                <div className='mush-show-and-info-card'>
                    <div className='mush-img-container'>
                        <img src={mushroom.image} alt={mushroom.name} className='mush-show-card' />
                    </div>

                    <div className='mush-info-card'>
                        <h1 className='mush-title'>{mushroom.name}</h1>
                        <p><em><strong>Scientific Name:</strong> {mushroom.scientific_name}</em>&nbsp;&nbsp; <img src={require("../images/speaker.png")} alt="listen" className='listen' onClick={pronounce}/></p>
                        <p><strong>Location: </strong>{mushroom.location}</p>
                        <p><strong>Tea flavor: </strong>{mushroom.flavor}</p>
                    </div>
                </div>   
                <div className='health-bene-container'>
                    <h1 className='mush-title'>Medicinal Benefits</h1>
                    {healthBenefits.map(healthBenefit => <HealthBenefit key={healthBenefit.id} healthBenefit={healthBenefit} />)} <br /><br />
                </div>    

                <div className='sources'>
                    <div className='sources-and-toggle-btn'>
                        <h3 className='sources-title'>Sources<button onClick={this.toggleSources} className='sources-btn'><strong>{displaySources ? '–' : '+' }</strong></button></h3>
                    </div>

                    {displaySources ? 
                    <SourcesContainer 
                    sources={sources} 
                    /> : null}
                </div>
                    
                <div className='comments-and-mush-highfive'>
                    <div className='comments'>
                        <CommentForm 
                        content={content} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        errors={errors}
                        />
                        <CommentsContainer comments={comments} deleteComment={this.deleteComment}/>
                    </div>
                        
                    <img src={require("../images/mushdancing_cropped.gif")} alt="listen" className='highfive-mush' />
                </div>  
            </div>
        );
    };
};

export default MushShowPage;


