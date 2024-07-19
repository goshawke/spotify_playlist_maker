import React from 'react';
import './styles/App.css';

import SearchBtn from './components/SearchBtn';
import SaveBtn from './components/SaveBtn';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import Track from './components/Track'
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const sampleTracks = [
  {artist: 'Alvvays', title: 'Party Police', album: 'Antisocialites'},
  {artist: 'Blink-182', title: 'Dont Leave Me', album: 'Enema of State'},
  {artist: 'Arcade Fire', title: 'Modern Man', album: 'The Suburbs'},
  {artist: 'Death Cab For Cutie', title: 'Sound of Settling', album: 'Transatlanticism'}
];

function App() {
  return (
    <div className="App">
      <h1>Spotify Playlist Maker</h1>
      <div id='form-container'>
        <SearchBar />
      </div>

      <div id='main-div'>
        <div id='results-div'>
          <SearchResults results={sampleTracks}/>
        </div>

        <div id='playlist-div'>
          <Playlist />
        </div>
      </div>
      

    </div>
  );
}

export default App;
