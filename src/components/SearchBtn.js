import React, { useState } from 'react';

function SearchBtn(props){

    return (
        <button type='submit' searchText={props.searchText} >Search</button>
    )
}

export default SearchBtn;