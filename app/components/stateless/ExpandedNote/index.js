/*
This component takes our inputed data, and outputs it to the DOM
*/
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./style.scss');

function ExpandedNote(props) {
    return (
      <div className="expanded--overlay">
        <div className="expanded--modal">
            <h1 className="expanded--modal--form-title">
              {props.data.title}
            </h1>
            <div className="expanded--modal--form-date">
              {props.data.date}
            </div>
            <span class="divider"></span>
            <div className="expanded--modal--form-note">
              {props.data.text}
            </div>
            <div class="expanded--modal--form-close"
              type="Close"
              onClick={props.close}>
              Close
            </div>
        </div>
      </div>
    );
}

export default ExpandedNote;
