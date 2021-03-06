import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseData => this.setState({ albums: responseData }));
    }

  renderAlubms() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
render() {
  console.log(this.state.albums);
  return (
    <ScrollView>
      {this.renderAlubms()}
    </ScrollView>
  );
  }
}

export default AlbumList;
