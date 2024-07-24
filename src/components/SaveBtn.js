import React, { useState } from 'react';

import styles from '../styles/SaveBtn.module.css'

function SaveBtn(props){

    function handleClick(e){
        alert('Saving to Spotify');
    }


    return (
        <button id="SaveBtn" type='Submit' onClick={handleClick} className={styles.button}>Save to Spotify</button>
    )

}

export default SaveBtn;