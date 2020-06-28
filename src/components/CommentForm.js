import React from 'react'

const CommentForm = (props) => {

    const { commentText, handleChange, handleSubmit } = props 
        return(
            <div className="modal-guts">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <br></br>
                            <br></br>
                            <h3>Comments</h3>
                            <textarea name='commentText' value={commentText} placeholder="Share your opinion" onChange={handleChange} />
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
            </div>
        )
    }

export default CommentForm