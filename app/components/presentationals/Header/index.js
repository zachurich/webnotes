// Header Component
import React from 'react';

require('./style.css');


class Header extends React.Component {
  constructor() {
      super();
      this.openEditor = this.openEditor.bind(this);
  }
  openEditor() {
    const button = document.querySelector('.add-note');
    const editor = document.querySelector('.overlay');
    const submit = document.querySelector('button');

    editor.style.display = 'block';
    submit.addEventListener('click', function() {
    editor.style.display = "none";
    });
  }
  render() {
    const username = this.props.title;
    console.log(username);
    return (
      <header>
        <div className="add-note" onClick={ this.openEditor }>
          <div className="contain-button">
            <span className="vertical"></span>
            <span className="horizontal"></span>
          </div>
        </div>
        <div className="title">{username}</div>
        <div className="menu">
          <div className="contain-button">
            <span className="horizontal"></span>
            <span className="horizontal"></span>
            <span className="horizontal"></span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
