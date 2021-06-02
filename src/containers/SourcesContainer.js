import React from 'react';
import Source from '../components/Source';

const SourcesContainer = ({ sources }) => {
    return(
        <div className='sources-list'>
            {sources.map(sourceArr => sourceArr.map(sourceObj => <Source key={sourceObj.id} {...sourceObj} />))}   
        </div>
    );
};

export default SourcesContainer;