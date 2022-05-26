import React from 'react';
import { useState } from 'react';
import Counter from './les2/Counter';

export default function () {
  let [maxTest, setMaxTest] = useState(10);
  let setMaxTest5 = () => setMaxTest(5);

  return <>
    <Counter min={1} max={maxTest} key={`1:${maxTest}`} />
    <hr />
    <button type='button' onClick={setMaxTest5}>Set 5</button>
  </>;
}