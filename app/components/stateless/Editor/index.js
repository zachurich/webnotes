/*


*/
import React from 'react';

import Button from '../Button/';

import './style.scss';

function Editor (props) {
  let conditionalText = '';
  props.error == true ? conditionalText = 'Close Editor' : conditionalText = 'Submit';

    return (
      <div className="overlay">
        <div className="modal">
            <form
              className="modal--form"
              onSubmit={ props.data ? (e) => props.editItem(e, props.data.id) : props.addItem }>
                <h1 className="modal--form--header">{ props.data ? `Edit` : `Write a note` }</h1>
                <input
                  className="modal--form--title"
                  ref={props.inputTitle}
                  type="text"
                  maxLength="12"
                  placeholder="Title"
                  defaultValue={ props.data.title }
                />
                <textarea
                  onChange={props.updateText}
                  className="modal--form--note"
                  ref={props.inputText}
                  type="text"
                  placeholder="Note"
                  defaultValue={ props.data.text }>
                </textarea>
                <Button color="#EC644B" type={ conditionalText } close={ props.close } />
            </form>
        </div>
      </div>
    )
}

export default Editor;
