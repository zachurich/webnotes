// Header Component
import React from 'react';
import $ from 'jquery';

require('./style.css');


class Header extends React.Component {
  componentDidMount() {
    $('.add-note').on('click', function() {
      console.log('working!');
      if($('.overlay').hasClass('show')) {
        $('.overlay').removeClass('show');
      } else {
        $('.overlay').addClass('show');
      }
    })
    $('button').on('click', function() {
      if($('.overlay').hasClass('show')) {
        $('.overlay').removeClass('show');
      }
    })
  }
  render() {
    const username = this.props.title;
    return (
      <header>
        <div className="add-note">
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
