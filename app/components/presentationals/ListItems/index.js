/*
This component takes our inputed data, and outputs it to the DOM
*/
import React from 'react';
import ExpandedNote from '../ExpandedNote/';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./style.scss');

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    // This will be used to pass data to expanded component
    const itemData = '';

    this.state = { showExpanded: false };

    this.passItemData = this.passItemData.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  // Pass item data from click
  passItemData(item) {
    // itemData updated with data from click
    this.itemData = item;
  }
  // Click updates state and passes item data
  handleOpen(item) {
    this.setState({ showExpanded: true });
    this.passItemData(item);
  }
  // This is passed to expanded view to handle closing
  handleClose() {
    this.setState({ showExpanded: false });
  }
  createTasks = (item) => {
      return (
          <li
            className="list--items"
            key={item.id}
          >
              <div
                className="list--items--erase"
                onClick={() => this.props.removeItem(item.key) }>
              </div>
              <h2
                className="list--items--title">
                {item.title}
              </h2>
              <p
                className="list--items--date">
                {item.date}
              </p>
              <p
                className="list--items--note-content">
                {item.text}
              </p>
              <div
                className="list--items--read-more"
                onClick={() => this.handleOpen(item)}>
                View Note
              </div>
          </li>
      );
  }
  render() {
      // Get our list object
      const listEntries = this.props.entries;

      // Map it using createTasks method
      const listItems = listEntries.map(this.createTasks);
      return (
        <div>
          { this.state.showExpanded ?
            <ExpandedNote
              data={ this.itemData }
              close={ this.handleClose }/> : null }
          <ul className="list">
            <ReactCSSTransitionGroup
              transitionName="pop-in"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}>
              {listItems}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      );
    }
}

export default ListItems;
