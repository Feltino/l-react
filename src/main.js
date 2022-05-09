import React from 'react';
import { createRoot } from 'react-dom/client';
// import UserCard from './UserCard';
// import CounterClass from './CounterClass';
// import CounterFn from './CounterFn';
// import CounterFnDz from './CounterFnDz';
import CounterFnDzUp from './CounterFnDzUp';

const container = document.querySelector('.app');
const root = createRoot(container)
root.render(
  <>
    <CounterFnDzUp min={1} max={10} />
  </>
);