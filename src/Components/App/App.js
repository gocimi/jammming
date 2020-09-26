import React from 'react';
import './App.css';
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResults from "../../Components/SearchResults/SearchResults";
import Playlist from "../../Components/Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "Nueva lista",
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      const playlistTracksAux = this.state.playlistTracks;
      playlistTracksAux.push(track);
      this.setState({
        playlistTracks: playlistTracksAux
      })
    }
  }
  
  removeTrack(track) {
    const playlistTracksAux = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({
      playlistTracks: playlistTracksAux
    })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => {
      return track.uri;
    })
  }

  search(term) {
    const tracks = Spotify.search(term);
    this.setState({
      searchResults: tracks
    })
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks} 
                      onNameChange={this.updatePlaylistName} 
                      onRemove={this.removeTrack} 
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
