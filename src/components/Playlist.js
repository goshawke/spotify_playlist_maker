import React, { useState } from 'react';

import style from '../styles/Playlist.module.css'

import Tracklist from '../components/Tracklist';
import SaveBtn from '../components/SaveBtn';

function Playlist(){


    return(
        <>
            <Tracklist />
            <SaveBtn />
        </>
    )

}

export default Playlist;