import React from 'react';

export default function UserCard({ name, text }) {
  return (
    <div className='some'>
      <h3>{name}</h3>
      <hr />
      <p>{text}</p>
    </div>
  )
}