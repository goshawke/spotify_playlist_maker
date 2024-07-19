import React, { useState } from 'react';

import styles from '../styles/Track.module.css'

function Track(props){


    return (
        <div className={styles.container}>
            <div>
                <h3>{props.title}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            <button className={styles.button}>+</button>

        </div>
    )

}

export default Track;