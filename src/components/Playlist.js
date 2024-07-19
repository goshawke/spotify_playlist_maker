import React, { useState } from 'react';

import styles from '../styles/Playlist.module.css'

import Tracklist from '../components/Tracklist';
import SaveBtn from '../components/SaveBtn';

function Playlist(){

    const [playlistName, setPlaylistName] = useState('');

    function handleUserInput(e){
        setPlaylistName(e.target.value);
    }


    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input type='text' value={playlistName} onChange={handleUserInput} placeholder='Your Playlist Name' />
            </form>
            <Tracklist className={styles.tracklist} />
            
            <SaveBtn className={styles.saveBtn}/>
            
        </div>
    )

}

export default Playlist;