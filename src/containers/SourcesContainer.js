import React from 'react'
import Source from '../components/Source'

const SourcesContainer = (props) => {

    const { sources } = props
// console.log(props.sources)
        return(
            <div className='sources-list'>
                {sources.map(sourceArr => sourceArr.map(sourceObj => <Source key={sourceObj.id} {...sourceObj} />))}   
            </div>
        )
    }

export default SourcesContainer