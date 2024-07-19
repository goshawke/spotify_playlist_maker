import React, { useState } from 'react';

import styles from '../styles/SearchBar.module.css'
import SearchBtn from '../components/SearchBtn';

function SearchBar(){

    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e){
        setSearchTerm(e.target.value);
    }

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" value={searchTerm} onChange={handleChange} placeholder='song, artist, album'></input>
            <SearchBtn searchTerm={searchTerm} />
        </form>
    );
}

export default SearchBar;