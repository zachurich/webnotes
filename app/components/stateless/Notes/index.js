import React from 'react';

require('./style.scss');

function Notes(props) {
  const details = props.details;
  return (
    <li
      className="list--items"
    >
        <div
          className="list--items--erase"
          onClick={props.remove}
          >
        </div>
        <h2
          className="list--items--title">
          {details.title}
        </h2>
        <p
          className="list--items--date">
          {details.date}
        </p>
        <p
          className="list--items--note-content">
          {details.text}
        </p>
        <div
          className="list--items--read-more"
          onClick={() => props.open(details)}>
          View Note
        </div>
    </li>
  )
}

export default Notes;
