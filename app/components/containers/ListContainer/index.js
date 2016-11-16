/*
This component is used for taking in data through 'Form' that will be output
through 'ListItems'
*/
import React from 'react';

import ListItems from '../../presentationals/ListItems/';
import Editor from '../../presentationals/Editor/';
import Button from '../../presentationals/Button/';

import base from '../../../config/base';

require('./style.css');

class ListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
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
    localStorage.setItem(`user-${this.props.url}`,
    JSON.stringify(nextState.order));
  }
  // Create a function to add list items to out 'items' array
  addItem(e) {
    // Store our items in components 'items' state
    const itemArray = this.state.items;
    // Function to get full date (will be stored in 'key')
    function dateGet() {
      const d = new Date();
      const curr_date = d.getDate();
      const curr_month = d.getMonth() + 1; //Months are zero based
      const curr_year = d.getFullYear();
      return curr_month + "-" + curr_date + "-" + curr_year;
    }
    // Add list items to end of array 'items'
    itemArray.push (
      {
        title: this._inputTitle.value,
        text: this._inputText.value,
        key: Date.now(),
        date: dateGet()
      }
    );
    // Set the state of the component with what's been inputed
    this.setState({ items: itemArray });
    // Empty input value after submit
    // Leaving like this till I find a validation method
    // TODO: Find a validation method
    this._inputTitle.value = "Title";
    this._inputText.value = "Content";
    // Prevent form submit from refreshing page as it normally would
    e.preventDefault();
  }
  // remove(item){
  //   const items = itemArray.filter(function(itm){
  //     return item.key !== itm.key;
  //   });
  //   this.setState({ items: itemArray });
  // }
  render() {
    return (
      <div>
          <Editor
            addItem={ this.addItem }
            inputTitle={ (a) => this._inputTitle = a }
            inputText={ (a) => this._inputText = a } />
        <div className="container">
          <ListItems
            params={ this.props.url }
            entries={ this.state.items }
            remove={ this.remove } />
        </div>
      </div>
    );
  }
}

export default ListContainer;
