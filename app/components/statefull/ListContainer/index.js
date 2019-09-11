/*
This component is used for taking in data through 'Form' that will be output
through 'ListItems'
*/
import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import marked from "marked";
import List from "../List/";
import Editor from "../../stateless/Editor/";
import Button from "../../stateless/Button/";
import ExpandedNote from "../../stateless/ExpandedNote";
import Annotations from "../../stateless/Annotations";

import { formatTitle } from "../../helpers";

import { base, app } from "../../../config/base";

import "../../transitions.scss";

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // Sync state to firebase DB
  componentWillMount() {
    const str = window.location.hash;
    const strFormat = str.lastIndexOf("/");
    const username = str.substring(strFormat + 1);

    this.ref = base.syncState(`/notes/${username}`, {
      context: this,
      state: "items"
    });
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      `user-${nextProps.url}`,
      JSON.stringify(nextState.items)
    );
  }
  addItem(e) {
    e.preventDefault();

    // Store our items in components 'items' state
    let items = { ...this.state.items };

    // Function for formating our dates
    function dateGet() {
      const d = new Date();
      const curr_date = d.getDate();
      const curr_month = d.getMonth() + 1; //Months are zero based
      const curr_year = d.getFullYear();
      return curr_month + "/" + curr_date + "/" + curr_year;
    }

    // Add list items to end of array 'items'
    let title = this._inputTitle.value;
    const text = this._inputText.value;
    if (text.length > 0) {
      title.length > 0 ? title : (title = formatTitle(text));
      // this creates a new object in our state object titled 'note-uniqueID'
      // with all our details
      items[`note-${Date.now()}`] = {
        title: title,
        text: text,
        id: Date.now(),
        date: dateGet()
      };
      this.setState({ items: items });
    }
  }
  editItem(e, key) {
    e.preventDefault();
    let items = { ...this.state.items };

    let title = this._inputTitle.value;
    const text = this._inputText.value;

    if (text.length > 0) {
      title.length > 0 ? title : (title = formatTitle(text));

      // Make 'copy' of existing items
      items[`note-${key}`] = {
        title: title,
        text: text
      };

      this.setState({ items: items });
    }
  }
  removeItem(key) {
    // Make 'copy' of existing items
    const items = { ...this.state.items };
    // Delete our clicked item
    items[key] = null;
    // Update state
    this.setState({ items: items });
  }
  render() {
    return (
      <div
        style={{
          padding: "0 20px"
        }}
      >
        <ReactCSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
        >
          {Object.keys(this.state.items).length < 1 ? (
            <Annotations type="add" />
          ) : null}
          {this.props.editor ? (
            <Editor
              data={this.props.itemData}
              updateText={this.props.updateText}
              error={this.props.error}
              editItem={this.editItem}
              addItem={this.addItem}
              close={this.props.close}
              inputTitle={a => (this._inputTitle = a)}
              inputText={a => (this._inputText = a)}
            />
          ) : null}
        </ReactCSSTransitionGroup>
        <div className="container">
          <List
            editCheck={this.props.editor}
            edit={this.editItem}
            triggerEditor={this.props.triggerEditor}
            params={this.props.url}
            entries={this.state.items}
            removeItem={this.removeItem}
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
