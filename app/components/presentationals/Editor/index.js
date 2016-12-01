/*


*/
import React from 'react';

import Button from '../Button/';

require('./style.scss');

function Editor (props) {
    return (
      <div className="overlay">
        <div className="modal">
            <form className="list-form" onSubmit={props.addItem}>
                <h1>Write a note</h1>
                <input className="title" ref={props.inputTitle} type="text" placeholder="Title" defaultValue="Title"/>
                <textarea className="note" ref={props.inputText} type="text" placeholder="Note" defaultValue="Content"></textarea>
                <Button/>
            </form>
        </div>
      </div>
    )
}

export default Editor;
