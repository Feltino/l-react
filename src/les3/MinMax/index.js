import React, { useRef, useEffect } from 'react';
import propTypes from './props';
import style from './style.module.css';
MinMax.propTypes = propTypes;


function MinMax({ max, min = 1, current, onChange }) {
  let inp = useRef();

  function onKeyPress(e) {
    if (e.key === "Enter") {
      parseCurrentStr(e);
    }
  }

  function parseCurrentStr(e) {
    let num = parseInt(inp.current.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  function applyCurrent(num) {
    let validCurrent = Math.max(min, Math.min(max, num));
    inp.current.value = validCurrent;
    onChange(validCurrent);
  }

  let inc = () => applyCurrent(current + 1);
  let dec = () => applyCurrent(current - 1);

  useEffect(() => {
    inp.current.value = current;
  }, [current]);

  return (
    <>
      <button className='btn btn-warning' type='button' onClick={dec}>-</button>
      <input
        className={style.inp}
        type='text'
        ref={inp}
        defaultValue={current}
        onBlur={parseCurrentStr}
        onKeyPress={onKeyPress}
      />
      <button className='btn btn-success' type='button' onClick={inc}>+</button>
    </>
  )
}

export default MinMax;