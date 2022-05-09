import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CounterFnDzUp({ max, min = 1 }) {
  let [current, setCurrent] = useState(min);

  function applyCurrent(num) {
    let validCurrent = Math.max(min, Math.min(max, num));
    setCurrent(validCurrent);
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

CounterFnDzUp.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number
}

export default CounterFnDzUp;