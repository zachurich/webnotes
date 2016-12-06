/*


*/
import React from 'react';

import Button from '../Button/';

require('./style.scss');

function Editor (props) {
    return (
      <div className="overlay">
        <div className="modal">
            <form
              className="modal--form"
              onSubmit={props.addItem}>
                <h1 className="modal--form--header">Write a note</h1>
                <input
                  className="modal--form--title"
                  ref={props.inputTitle}
                  type="text"
                  maxLength="10"
                  placeholder="Title"
                  defaultValue="Title"/>
                <textarea
                  className="modal--form--note"
                  ref={props.inputText}
                  type="text"
                  placeholder="Note"
                  defaultValue="Content"></textarea>
                <Button type="Add Note"/>
            </form>
        </div>
      </div>
    )
}

export default Editor;
