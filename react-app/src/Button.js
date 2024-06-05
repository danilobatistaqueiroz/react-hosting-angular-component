import React from 'react';
import _ from 'lodash';
import moment from 'moment';

function handleClick() {
  console.log(_.now());
  console.log(moment().format());
  alert('You clicked me!');
}

const Button = () => (
  <button onClick={handleClick}>MFE1 Button</button>
);

export default Button; 