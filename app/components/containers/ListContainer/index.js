/*
This component is used for taking in data through 'Form' that will be output
through 'ListItems'
*/
import React from 'react';
import ListItems from '../../presentationals/ListItems/';
import Editor from '../../presentationals/Editor/';
import Button from '../../presentationals/Button/';
import ExpandedNote from '../../presentationals/ExpandedNote';

import base from '../../../config/base';

require('./style.scss');

class ListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],

    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    // this.openItem = this.openItem.bind(this);
  }
  // Sync state to firebase DB
  componentWillMount() {
    this.ref = base.syncState(`/notes/${this.props.url}`,
      {
        context: this,
        state: 'items',
        asArray: true
      });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`user-${nextProps.url}`,
    JSON.stringify(nextState.items));
  }
  addItem(e) {
    // Store our items in components 'items' state
    const itemArray = this.state.items;

    console.log(itemArray);

    function dateGet() {
      const d = new Date();
      const curr_date = d.getDate();
      const curr_month = d.getMonth() + 1; //Months are zero based
      const curr_year = d.getFullYear();
      return curr_month + "/" + curr_date + "/" + curr_year;
    }
    // Add list items to end of array 'items'
    itemArray.push (
      {
        title: this._inputTitle.value,
        text: this._inputText.value,
        id: Date.now(),
        key: Date.now(),
        date: dateGet()
      }
    );

    this.setState({ items: itemArray });

    e.preventDefault();
  }
  removeItem(key) {
    // Make 'copy' of existing items
    const itemList = {...this.state.items};

    // Set key to null to delete
    itemList[key] = null;

    // Update state
    this.setState({ items: itemList });
  }
  render() {
    return (
      <div style={{
        padding: '0 20px',
      }}>
          {/* <ExpandedNote
            // data={ this.giveData }
          /> */}
          <Editor
            addItem={ this.addItem }
            inputTitle={ (a) => this._inputTitle = a }
            inputText={ (a) => this._inputText = a } />
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
}

export default ListContainer;
