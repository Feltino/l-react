import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


MinMax.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

function MinMax({ max, min = 1, current, onChange }) {
  let [inpVal, setInpVal] = useState(current);
  let onInput = e => setInpVal(e.target.value);

  function onKeyPress(e) {
    if (e.key === "Enter") {
      parseCurrentStr(e);
    }
  }

  function parseCurrentStr() {
    let num = parseInt(inpVal);
    applyCurrent(isNaN(num) ? min : num);
  }

  function applyCurrent(num) {
    let validCurrent = Math.max(min, Math.min(max, num));
    setInpVal(validCurrent);
    onChange(validCurrent);
  }

  let inc = () => applyCurrent(current + 1);
  let dec = () => applyCurrent(current - 1);

  useEffect(() => {
    setInpVal(current);
  }, [current]);

  return (
    <>
      <button type='button' onClick={dec}>-</button>
      <input type='text' value={inpVal} onChange={onInput} onBlur={parseCurrentStr} onKeyPress={onKeyPress} />
      <button type='button' onClick={inc}>+</button>
    </>
  )
}

export default MinMax;