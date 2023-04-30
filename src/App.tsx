import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './FetchingUsersExample/UsersList';
import GeoLocationExample from './UseLocationExample/GeoLocationExample';

function App() {
  return (
    <div className='App'>
      {/* <UsersList /> */}
      <GeoLocationExample />
    </div>
  );
}

export default App;
