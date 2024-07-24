import React, { useEffect, useState } from 'react';

import styles from '../styles/SearchResults.module.css'

import Track from '../components/Track';
import Playlist from './Playlist';


function SearchResults(props){


    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>RESULTS</h2>
            <ul>
                {props.results.map((track, index)=>{
                    return (
                        <>
                            <li key={index}>
                                <Track key={index} title={track.title} artist={track.artist} album={track.album} symbol='+'
                                        isAdded={props.addedTracks.some(t => t.title === track.title)}  
                                        onClick={() => props.addToPlaylist(track)}/>
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )

}

export default SearchResults;