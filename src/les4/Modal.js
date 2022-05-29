import React, { useRef } from 'react';
import useClickOutSide from './hooks/useClickOutSide';

export default function ({ showed, title, onClose, children }) {
  let classes = ['alert', 'alert-success'];

  if (!showed) {
    classes.push('d-none');
  }

  let root = useRef();

  useClickOutSide(root, function () {
    if (showed) {
      onClose();
    }
  });

  let content = !children ? null : <>
    {children}
    <hr />
  </>

  return <div ref={root} className={classes.join(' ')}>
    <h2>{title}</h2>
    <hr />
    {content}
    <button className='btn btn-success' onClick={onClose}>Ok</button>
  </div>
}