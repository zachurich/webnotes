import React from 'react';

import Annotations from '../Annotations/'

import './style.scss';

const Notes = (props) => {
  let hovered;
  const details = props.details;

  // Keep any special character from showing in the excerpt due to markdown
  const str = details.text;
  const formatted = str.trim().replace(/[^a-z0-9]+/gi, ' ');
  return (
    <li
      onMouseOver={ props.removeTooltip }
      className="list--items"
    >
        <div
          className="list--items--erase"
          onClick={ props.remove }
          >
        </div>
        <div
          className="list--items--edit"
          onClick={ () => props.edit('Editing', details) }
          >
        </div>
        <h2
          className="list--items--title">
          { details.title }
        </h2>
        <p
          className="list--items--date">
          { details.date }
        </p>
        <p
          className="list--items--note-content">
          { formatted }
        </p>
        <div
          className="list--items--read-more"
          onClick={ () => props.open(details) }>
          View Note
        </div>
    </li>
  )
}

export default Notes;
