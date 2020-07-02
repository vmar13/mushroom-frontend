import React from 'react'
import Comment from '../components/Comment'

class CommentsContainer extends React.Component {
    render() {

        const { comments, currentUser } = this.props

        return(
            <div className='comments-container'>
            {   
               comments.map(comment => <Comment key={comment.id} comment={comment} currentUser={currentUser} />)
            }
            </div>
        )
    }
}

export default CommentsContainer