import React from 'react'
import Comment from '../components/Comment'

class CommentsContainer extends React.Component {
    render() {

        const { comments, deleteComment } = this.props

        return(
            <div className='comments-container'>
            {   
               comments.map(comment => <Comment key={comment.id} comment={comment} deleteComment={deleteComment}/>)
            }
            </div>
        )
    }
}

export default CommentsContainer