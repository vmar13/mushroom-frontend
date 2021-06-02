import React from 'react'

const Comment = (props) => {
    let user = JSON.parse(localStorage.getItem('user'));
 
        return(
            <div className='comment-box'>
                <div className='username-and-teacup'>
                    <h4>{props.comment.user ? props.comment.user.username : null}&nbsp; <img src={require("../images/teacup.png")} alt="teacup" className='teacup' /></h4>
                </div>

                <div className='comment-content'>
                    <p>{props.comment.content}</p>   
                </div>
                {user.id === props.comment.user_id ? 
                <button onClick={() => props.deleteComment(props.comment.id)} className='delete-comment-btn'>Delete</button>
                : null }
            </div>
        )
    }

export default Comment;

