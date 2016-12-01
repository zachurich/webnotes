/*
This component takes our inputed data, and outputs it to the DOM
*/
import React from 'react';

require('./style.scss');

function ListItems(props) {
    // Build our list output
    const remove = props.remove;
    const listEntries = props.entries;

    function createTasks(item) {
        return (
            <li className="list--items" key={item.key}>
                {/* <div className="erase" onClick={remove}>X</div> */}
                <h2 className="list--items--title">{item.title}</h2>
                <p className="list--items--date">
                  {item.date}
                </p>
                <p className="list--items--note-content">
                  {item.text}
                </p>
                {/* <div className="list--items--read-more"></div> */}
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
