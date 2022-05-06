import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CounterFnDzUp({ max, min }) {
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
      <input type='text' onChange={e => setCurrent(e.target.value)} />
      <button type='button' onClick={inc}>+</button>
    </>
  )
}

CounterFnDzUp.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired
}

export default CounterFnDzUp;