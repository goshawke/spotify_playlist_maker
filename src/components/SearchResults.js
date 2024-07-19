import React, { useState } from 'react';

import styles from '../styles/SearchResults.module.css'

import Track from '../components/Track';


function SearchResults(props){

    const [tracks, setTracks] = useState(props.results);



    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>RESULTS</h2>
            <ul>
                {tracks.map((track)=>{
                    return (
                        <>
                            <li><Track title={track.title} artist={track.artist} album={track.album} /></li>
                        </>
                    )
                })}
            </ul>
        </div>
    )

}

export default SearchResults;