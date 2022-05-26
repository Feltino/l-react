import React, { useState } from 'react';
import PropTypes from 'prop-types';


MinMax.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

function MinMax({ max, min = 1, current, onChange }) {

  function applyCurrent(num) {
    let validCurrent = Math.max(min, Math.min(max, num));
    onChange(validCurrent);
  }

  function parseCurrentStr(e) {
    let num = parseInt(e.target.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  let inc = () => applyCurrent(current + 1);
  let dec = () => applyCurrent(current - 1);

  return (
    <>
      <button type='button' onClick={dec}>-</button>
      <input type='text' value={current} onChange={parseCurrentStr} />
      <button type='button' onClick={inc}>+</button>
    </>
  )
}

export default MinMax;