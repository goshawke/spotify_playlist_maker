import React, { useState, useEffect } from 'react';
import Track from '../components/Track'

import style from '../styles/Tracklist.module.css'

function Tracklist(){

    const [tracklist, setTracklist] = useState([]);
    const [track, setTrack] = useState({});


    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');

    function addTrack(track){
        setTracklist(()=>{
            return [...prev, track];
        })
    }

    function removeTrack(e){
        const trackToRemove = Tracklist.indexOf(e.target.value)
        const newTrackList = Tracklist[0, trackToRemove] + Tracklist[trackToRemove+1, -1]
        setTracklist(newTrackList);

    }

    useEffect(()=>{

    },[tracklist]);

    return (
        <>
            <ul>
                {tracklist.map((track)=>{
                    return (
                        <>
                            <li><Track title={track.title} artist={track.artist} album={track.album} /></li>
                            <button onClick={removeTrack}></button>
                        </>
                    )
                })}
            </ul>
        </>
    )

}


export default Tracklist;