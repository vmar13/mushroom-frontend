import React from 'react'

const Comment = (props) => {

        return(
            <div>
                {/* <h4>{((props.comment || {}).user || {}).username}</h4> */}
                <div className='username-and-teacup'>
                    <h4>{props.comment.user ? props.comment.user.username : props.currentUser.username}&nbsp; <img src={require("../images/teacup.png")} alt="teacup" className='teacup' /></h4>
                </div>

                <div className='comment-content'>
                    <p>{props.comment.content}</p>   
                </div>

                <button onClick={() => props.deleteComment(props.comment.id)}>Delete</button>
            </div>
        )
    }

export default Comment

