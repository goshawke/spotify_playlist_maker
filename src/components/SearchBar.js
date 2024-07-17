import React, { useState } from 'react';
import SearchBtn from '../components/SearchBtn';

function SearchBar(){

    const [searchText, setSearchText] = useState('');

    return (
        <form>
            <input type="text" value={searchText}></input>
            <SearchBtn searchText={searchText} />
        </form>
    );
}

export default SearchBar;