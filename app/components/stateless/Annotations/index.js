import React from 'react';
import svg from '../../../icons/desktop-annotations.svg';

import { decideString } from '../../helpers';

import './style.scss';

const Annotations = (props) => {
  let text;
  window.innerWidth >= 662 ? text = "Click" : text = "Tap" ;
  return (
    <p className={`tooltip tooltip--${props.type}`}>{ `${text} ${decideString(props.type)}` }</p>
  )

}

export default Annotations;
