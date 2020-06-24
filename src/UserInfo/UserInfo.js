import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then((data) => {
          this.setState({
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website,
            company: data.company.name
          })
        })
  }

  render() {
    return<section id={"sideUserInfo"}><aside className="UserInfo">
      <p className={"userInfo__title"}>{this.state.name}</p>
      <p>Contact Me @</p>
      <div className={"userInfo__detail"}>
        <h2 className={"userInfo__detail__title"}>Email</h2>
        <span className={"userInfo__detail__content"}>{this.state.email}</span>
      </div>
      <div className={"userInfo__detail"}>
        <h2 className={"userInfo__detail__title"}>Phone</h2>
        <span className={"userInfo__detail__content"}>{this.state.phone}</span>
      </div>
      <div className={"userInfo__detail"}>
        <h2 className={"userInfo__detail__title"}>Website</h2>
        <span className={"userInfo__detail__content"}>{this.state.website}</span>
      </div>
      <div className={"userInfo__detail"}>
        <h2 className={"userInfo__detail__title"}>Company</h2>
        <span className={"userInfo__detail__content not__selectable"}>{this.state.company}</span>
      </div>
    </aside></section>;
  }
}

export default UserInfo;
