import React from 'react';
import './styles/App.css';

import SearchBtn from './components/SearchBtn';
import SaveBtn from './components/SaveBtn';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import Track from './components/Track'
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';


function App() {
  return (
    <div className="App">
      <h1>Spotify Playlist Maker</h1>
      <div id='form-container'>
        <SearchBar />
      </div>

      <div>
        <SearchResults />
      </div>

      <div>
        <Playlist />
      </div>

      

    </div>
  );
}

export default App;
