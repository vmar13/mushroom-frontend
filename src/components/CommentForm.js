import React from 'react'

const CommentForm = (props) => {

    const { content, handleChange, handleSubmit } = props 
        return(
            <div className="modal-guts">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <br></br>
                            <br></br>
                            <h3>Comments</h3>
                            <textarea name='content' value={content} placeholder="Share your opinion" onChange={handleChange} /><br></br>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
            </div>
        )
    }

export default CommentForm