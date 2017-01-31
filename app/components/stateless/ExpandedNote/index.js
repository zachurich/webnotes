/*
This component takes our inputed data, and outputs it to the DOM
*/
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import marked from 'marked';

import './style.scss';
import './typography.scss';

// Marked config
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

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
            <div
              className="expanded--modal--form-note"
              dangerouslySetInnerHTML={{ __html: marked(props.data.text) }}>
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
