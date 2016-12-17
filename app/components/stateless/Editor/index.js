/*


*/
import React from 'react';

import Button from '../Button/';

require('./style.scss');

function Editor (props) {
  let conditionalText = '';
  props.error == true ? conditionalText = 'Close Editor' : conditionalText = 'Add Note';

    return (
      <div className="overlay">
        <div className="modal">
            <form
              className="modal--form"
              onSubmit={props.addItem}>
                <h1 className="modal--form--header">Write a note</h1>
                <input
                  onChange={props.updateText}
                  className="modal--form--title"
                  ref={props.inputTitle}
                  type="text"
                  maxLength="10"
                  placeholder="Title"
                />
                <textarea
                  className="modal--form--note"
                  ref={props.inputText}
                  type="text"
                  placeholder="Note">
                </textarea>
                <Button color="#EC644B" type={ conditionalText } close={ props.close } />
            </form>
        </div>
      </div>
    )
}

export default Editor;
