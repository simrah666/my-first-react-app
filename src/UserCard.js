import React from 'react';

const UserCard = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Role: {props.role}</p>
    </div>
  );
};

export default UserCard;
