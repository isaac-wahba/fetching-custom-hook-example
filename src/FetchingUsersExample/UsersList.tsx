import React from 'react';
import useFetchUsers from './useFetchUsers';
import './Styles.css';

const UsersList = () => {
  const { users, loading, error } = useFetchUsers(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='users-container'>
      {users.map((user) => (
        <div className='user-card user-card-content' key={user.id}>
          <h2 className='user-name'>{user.name}</h2>
          <p className='user-email'>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
