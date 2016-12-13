// Header Component
import React from 'react';

require('./style.scss');


class Header extends React.Component {
  constructor() {
      super();
      this.state = {
        list: [],
      }
      this.openEditor = this.openEditor.bind(this);
  }
  openEditor() {
    const button = document.querySelector('.add-note');
    const editor = document.querySelector('.overlay');
    const submit = document.querySelector('button');

    const title = document.querySelector('.modal--form--title');
    const note = document.querySelector('.modal--form--note');

    editor.style.display = 'flex';
    submit.addEventListener('click', function() {
      if ( title.value.length < 1 || note < 1 )
        return;
      else
        editor.style.display = "none";

    });
  }
  render() {
    const username = this.props.title;
    return (
      <header class="header">
        <div className="header--add-note" onClick={ this.openEditor }>
          <div className="contain-button">
            <span className="header--add-note--vertical"></span>
            <span className="header--add-note--horizontal"></span>
          </div>
        </div>
        <div className="header--title" style={{
          letterSpacing: '0.0625em',
        }}>{username}</div>
        <div className="header--menu" onClick={this.props.logout}>
          <div className="contain-button">
            <span className="header--menu--horizontal"></span>
            <span className="header--menu--horizontal"></span>
            <span className="header--menu--horizontal"></span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
