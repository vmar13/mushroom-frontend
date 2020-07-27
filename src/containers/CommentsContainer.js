import React from 'react'
import Comment from '../components/Comment'

class CommentsContainer extends React.Component {
    render() {

        const { comments, currentUser, deleteComment } = this.props

        return(
            <div className='comments-container'>
            {   
               comments.map(comment => <Comment key={comment.id} comment={comment} currentUser={currentUser} deleteComment={deleteComment}/>)
            }
            </div>
        )
    }
}

export default CommentsContainer