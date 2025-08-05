import React from 'react';
import Header from '/Header';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <Header />
      <UserCard name="Simrah Tariq" role="volunteer" />
      <UserCard name="Sarah" role="React Developer" />
    </div>
  );
}

export default App;
