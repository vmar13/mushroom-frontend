import React from 'react';
import Comment from '../components/Comment';

const CommentsContainer = ({ comments, deleteComment }) => {
    return(
        <div className='comments-container'>
        {   
            comments.map(comment => <Comment key={comment.id} comment={comment} deleteComment={deleteComment}/>)
        }
        </div>
    );
};

export default CommentsContainer;