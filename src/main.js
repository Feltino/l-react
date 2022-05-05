import React from 'react';
import { createRoot } from 'react-dom/client';
import UserCard from './UserCard';

const container = document.querySelector('.app');
const root = createRoot(container)
root.render(
  <UserCard name="Alex" text="dfdf" />
);

