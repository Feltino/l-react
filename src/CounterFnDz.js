import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CounterFnDz({ max, min }) {
  let [current, setCurrent] = useState(1);

  function inc() {
    if (current < max) {
      setCurrent(current + 1)
    }
  }

  function dec() {
    if (current > min) {
      setCurrent(current - 1)
    }
  }

  return (
    <>
      <button type='button' onClick={dec}>-</button>
      <span>{current}</span>
      <button type='button' onClick={inc}>+</button>
    </>
  )
}

CounterFnDz.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired
}

export default CounterFnDz;