import React, { useState } from 'react';

const Language = ({ name, votes, addVote }) => {

    return (
        <div className='lang_box'>
            <span>{votes}</span>
            <span>{name}</span>
            <span className='click_here' onClick={() => addVote(name)}>Click Here</span>
        </div>
    )
}

export default Language;