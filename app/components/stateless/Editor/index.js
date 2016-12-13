/*


*/
import React from 'react';

import Button from '../Button/';

require('./style.scss');

function Editor (props) {
  let errorMessage = '';
  if( props.error == true) {
    document.querySelector('.modal--form').classList.add('errorMessage');
    errorMessage = 'You must enter one or more character.';
  }

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
                />
                <textarea
                  className="modal--form--note"
                  ref={props.inputText}
                  type="text"
                  placeholder="Note">
                </textarea>
                <Button type="Add Note"/>
            </form>
        </div>
      </div>
    )
}

export default Editor;
