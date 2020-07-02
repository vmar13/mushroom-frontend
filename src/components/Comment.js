import React from 'react'

const Comment = (props) => {

    // const { content } = props

    // console.log(props.comment.user)
        return(
            <div>
                {/* <h4>{((props.comment || {}).user || {}).username}</h4> */}
                <h4>{props.comment.user ? props.comment.user.username : props.currentUser.username}</h4>
                <p>{props.comment.content}</p>   
            </div>
        )
    }

export default Comment

