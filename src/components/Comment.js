import React from 'react';

const Comment = ({ comment, deleteComment }) => {
    let user = JSON.parse(localStorage.getItem('user'));
 
        return(
            <div className='comment-box'>
                <div className='username-and-teacup'>
                    <h4>{comment.user ? comment.user.username : null}&nbsp; <img src={require("../images/teacup.png")} alt="teacup" className='teacup' /></h4>
                </div>

                <div className='comment-content'>
                    <p>{comment.content}</p>   
                </div>
                {user.id === comment.user_id ? 
                <button onClick={() => deleteComment(comment.id)} className='delete-comment-btn'>Delete</button>
                : null }
            </div>
        );
    };

export default Comment;

