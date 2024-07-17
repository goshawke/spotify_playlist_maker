import React, { useState } from 'react';

import style from '../styles/SearchBtn.module.css'

function SearchBtn(props){

    function handleSubmit(){
        const searchTerm = props.searchTerm;

        const results = [];
        // use Spotify API call to search using searchTerm

        return results;

    }

    return (
        <button className={style.button} type='submit' searchTerm={props.searchTerm} onClick={handleSubmit}>Search</button>
    );
}

export default SearchBtn;