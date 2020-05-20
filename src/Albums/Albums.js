import React, { Component } from 'react';
import './Albums.scss';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  render() {
    const { albums } = this.state;
    return (
      <section className="Albums">
        {albums.map(() => (
          <div className="album">
            <p className="title">Album title here...</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
