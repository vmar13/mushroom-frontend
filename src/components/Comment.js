import React from 'react'

const Comment = (props) => {

    const { content } = props

        return(
            <div>
                {content}   
            </div>
        )
    }

export default Comment