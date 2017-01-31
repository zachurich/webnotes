import React from 'react';
import svg from '../../../icons/desktop-annotations.svg';

import './style.scss';

const Annotations = (props) => {
  let text;
  window.innerWidth >= 662 ? text = "Click" : text = "Tap" ;
  return (
    <p className="tooltip">{ `${text} ${props.action}` }</p>
  )

}

export default Annotations;
