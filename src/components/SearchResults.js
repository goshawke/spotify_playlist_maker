import React, { useState } from 'react';

import style from '../styles/SearchResults.module.css'

import Tracklist from '../components/Tracklist';


function SearchResults(){

    const [tracks, setTracks] = useState([]);



    return (
        <>
            <Tracklist tracks={tracks}/>
        </>
    )

}

export default SearchResults;