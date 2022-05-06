import React from 'react';
import { createRoot } from 'react-dom/client';
import UserCard from './UserCard';
import CounterClass from './CounterClass';
import CounterFn from './CounterFn';

const container = document.querySelector('.app');
const root = createRoot(container)
root.render(
  <>
    <UserCard name="Alex" text="dfdf" />
    <h3>Class max=3</h3>
    <CounterClass max={3} />
    <hr />
    <h3>Class max=5</h3>
    <CounterClass max={5} />
    <hr />
    <h3>Fn max=3</h3>
    <CounterFn max={3} />
    <hr />
    <h3>Fn max=5</h3>
    <CounterFn max={5} />
  </>
);

