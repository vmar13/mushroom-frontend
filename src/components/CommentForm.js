import React from 'react'

const CommentForm = (props) => {

    const { content, handleChange, handleSubmit, errors } = props 
        return(
            <div className="modal-guts">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <h3 className='comments-title'>Comments</h3>
                            <input type='text' name='content' value={content} className='comment-input' onChange={handleChange} /><br></br>
                            <div className='form-error'>{errors.content}</div>
                            <input type="submit" value="Submit" className='login-btn' />
                        </div>
                    </form>
            </div>
        )
    }

export default CommentForm