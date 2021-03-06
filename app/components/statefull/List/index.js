/*
This component takes our inputed data, and outputs it to the DOM
*/
import React from 'react';
import ExpandedNote from '../../stateless/ExpandedNote/';
import Notes from '../../stateless/Notes/'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../transitions.scss';

class List extends React.Component {
  constructor(props) {
    super(props);

    // This will be used to pass data to expanded component
    const itemData = '';

    this.state = {
      showExpanded: false,
      tooltip: false,
     };

    this.handleRemoveTooltip = this.handleRemoveTooltip.bind(this);
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

  handleRemoveTooltip() {
    this.setState({ tooltip: true });
  }

  render() {
      // Get our list object
      const listEntries = this.props.entries;

      return (
        <div>
          <ReactCSSTransitionGroup
            transitionName="fade-in"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
          { this.state.showExpanded ?
            <ExpandedNote
              data={ this.itemData }
              close={ this.handleClose }/> : null }
          </ReactCSSTransitionGroup>
          <ul className="list">
            <ReactCSSTransitionGroup
              transitionName="pop-in"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {
                Object
                  .keys(listEntries)
                    .map(key =>
                        <Notes
                          editCheck={ this.props.editCheck }
                          edit={ this.props.triggerEditor }
                          key={key}
                          index={key}
                          details={listEntries[key]}
                          open={ this.handleOpen }
                          remove={ () => this.props.removeItem(key) }/>
                        )
              }
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      );
    }
}

export default List;
