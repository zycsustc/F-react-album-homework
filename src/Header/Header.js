import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    const { name, username } = this.props.user;
    return (
      <header className="Header">
        <div className="header-wrapper">
          <h1>{name}&apos;s Album</h1>
          <div className="username">Hi, {username}</div>
        </div>
      </header>
    );
  }
}

export default Header;
