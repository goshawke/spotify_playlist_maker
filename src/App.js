import React, { useEffect, useState } from 'react';
import './styles/App.css';

import SearchBtn from './components/SearchBtn';
import SaveBtn from './components/SaveBtn';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import Track from './components/Track'
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const sampleTracks = [
  {artist: 'Alvvays', title: 'Pimsol Punks', album: 'Antisocialites'},
  {artist: 'Alvvays', title: 'Saved by a Waif', album: 'Antisocialites'},
  {artist: 'Blink-182', title: 'Dont Leave Me', album: 'Enema of State'},
  {artist: 'Blink-182', title: 'Josie', album: 'Enema of State'},
  {artist: 'Arcade Fire', title: 'Modern Man', album: 'The Suburbs'},
  {artist: 'Arcade Fire', title: 'Ready to Start', album: 'The Suburbs'},
  {artist: 'Death Cab For Cutie', title: 'Sound of Settling', album: 'Transatlanticism'},
  {artist: 'Death Cab For Cutie', title: 'New Year', album: 'Transatlanticism'}
];

const samplePlaylistTracks = [
  {artist: 'Alvvays', title: 'Party Police', album: 'Antisocialites'},
  {artist: 'Blink-182', title: 'Dont Leave Me', album: 'Enema of State'},
  {artist: 'Arcade Fire', title: 'Modern Man', album: 'The Suburbs'},
  {artist: 'Death Cab For Cutie', title: 'Sound of Settling', album: 'Transatlanticism'}
];


function App() {

  const [playlistTracks, setPlaylistTracks] = useState([]);


  const addToPlaylist = (trackToAdd) => {
    if (!playlistTracks.includes(trackToAdd)) {
      setPlaylistTracks((prev) => [...prev, trackToAdd]);
    }
  };


  const removeFromPlaylist = (trackToRemove) => {
    setPlaylistTracks((prev)=> prev.filter((track)=> track != trackToRemove));
  };


  return (
    <div className="App">
      <h1>Spotify Playlist Maker</h1>
      <div id='form-container'>
        <SearchBar />
      </div>

      <div id='main-div'>
        <div id='results-div'>
          <SearchResults results={sampleTracks} addedTracks={playlistTracks} addToPlaylist={addToPlaylist}/>
        </div>

        <div id='playlist-div'>
          <Playlist addedTracks={playlistTracks} removeFromPlaylist={removeFromPlaylist}/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
