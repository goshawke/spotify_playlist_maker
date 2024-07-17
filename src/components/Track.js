import React, { useState } from 'react';

import style from '../styles/Track.module.css'

function Track(props){


    return (
        <>
            <span><strong>{props.title}</strong></span>
            <span>{props.artist} | {props.album}</span>
        </>
    )

}

export default Track;