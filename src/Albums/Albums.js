import React, { Component } from 'react';
import './Albums.scss';
import Photos from "../Photos/Photos";
import 'regenerator-runtime/runtime';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then((data) => {
          this.setState({
            albums : data
          })
        })
    this.setState({
      showComponentId: 1
    })
  }

  onClick(albumId){
    this.setState({
        showComponentId: albumId
    })
  }

  getId(albumId){
    return "album"+albumId;
  }

  render() {
    const { albums } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album" onClick={() => { this.onClick(album.id) }} id={this.getId(album.id)}>
              {this.state.showComponentId===album.id ?
                       <Photos albumId={this.state.showComponentId}
                        albumTitle={album.title}/> :
                  <p className="title">{album.title}</p>
              }
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
