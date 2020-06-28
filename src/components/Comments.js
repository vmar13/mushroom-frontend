import React from 'react'

const Comments = () => {
        return(
            <div className="modal-guts">
                    <form  >
                        <div className='form-group'>
                            <br></br>
                            <br></br>
                            <h3>Comments</h3>
                            {/* <input name='name' placeholder="Dog Walker's Name"  /> */}
                            <input type='text' name='comment'value='comment' placeholder="Share your opinion"  />
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
            </div>
        )
    }

export default Comments