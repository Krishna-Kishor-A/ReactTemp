import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';

const TextField = (props) => {
  const { inputProps = {}, onChange: onValueChange } = props;
  const { type, min, max } = inputProps;
  const { pattern, ...propsToExpose } = inputProps;

  const formatNumber = (value) => {
    if (!value) return value;
    if (min && (value < min)) return min;
    if (max && (value > max)) return max;

    return Math.round(value);
  };

  const onChange = (event) => {
    let { value } = event.target;

    if (pattern) {
      value = value.replace(new RegExp(pattern, 'gi'), '');
    }

    if (type === 'number') {
      value = formatNumber(value);
    }

    event.target.value = value;

    onValueChange && onValueChange(event);
  };

  const onKeyDown = (event) => {
    if ((event.target.type === 'number') && (event.which === 69)) {
      event.preventDefault();
    }
  };

  return <MuiTextField
    {...props}
    inputProps={propsToExpose}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />;
}

export default TextField;