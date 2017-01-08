/*
This component is used for taking in data through 'Form' that will be output
through 'ListItems'
*/
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ListItems from '../ListItems/';
import Editor from '../../stateless/Editor/';
import Button from '../../stateless/Button/';
import ExpandedNote from '../../stateless/ExpandedNote';

import base from '../../../config/base';

import '../../transitions.scss';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // Sync state to firebase DB
  componentWillMount() {
    const str = window.location.hash;
    const strFormat = str.lastIndexOf('/');
    const username = str.substring(strFormat + 1);

    this.ref = base.syncState(`/notes/${username}`,
      {
        context: this,
        state: 'items'
      });
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`user-${nextProps.url}`,
    JSON.stringify(nextState.items));
  }
  addItem(e) {
    e.preventDefault();

    // Store our items in components 'items' state
    let items = {...this.state.items};

    function dateGet() {
      const d = new Date();
      const curr_date = d.getDate();
      const curr_month = d.getMonth() + 1; //Months are zero based
      const curr_year = d.getFullYear();
      return curr_month + "/" + curr_date + "/" + curr_year;
    }
    // Add list items to end of array 'items'
    const title = this._inputTitle.value;
    const text = this._inputText.value;

    if (title.length > 0 && text.length > 0) {
      // this creates a new object in our state object titled 'note-uniqueID'
      // with all our details
      items[`note-${Date.now()}`] = {
          title: this._inputTitle.value,
          text: this._inputText.value,
          id: Date.now(),
          // key: Date.now(),
          date: dateGet()
      };
      this.setState({ items: items });
    }
  }
  removeItem(key) {
    // Make 'copy' of existing items
    const items = {...this.state.items};
    // Delete our clicked item
    items[key] = null;
    // Update state
    this.setState({ items: items });
  }
  render() {
    return (
      <div style={{
        padding: '0 20px',
      }}>
        <ReactCSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}>
          { this.props.editor ?
            <Editor
              updateText={ this.props.updateText }
              error={ this.props.error }
              addItem={ this.addItem }
              close={ this.props.close }
              inputTitle={ (a) => this._inputTitle = a }
              inputText={ (a) => this._inputText = a }/> : null }
        </ReactCSSTransitionGroup>
        <div className="container">
          <ListItems
            params={ this.props.url }
            entries={ this.state.items }
            removeItem={ this.removeItem }
          />
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
}

export default ListContainer;
