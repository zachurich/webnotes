/*
This component takes our inputed data, and outputs it to the DOM
*/
import React from 'react';

require('./style.css');

function ListItems(props) {
    // Build our list output
    const remove = props.remove;
    const listEntries = props.entries;

    function createTasks(item) {
        return (
            <li key={item.key}>
                {/* <div className="erase" onClick={remove}>X</div> */}
                <h2>{item.title}</h2>
                <p className="date">
                  {item.date}
                </p>
                <p className="note-content">
                  {item.text}
                </p>
                {/* <div className="read-more"></div> */}
            </li>
        );
    }
    const listItems = listEntries.map(createTasks);
    return (
        <ul className="list">
            {listItems}
        </ul>
    );
}

export default ListItems;
