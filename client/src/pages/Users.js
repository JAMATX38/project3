import React from 'react';
import UserList from '../components/UserList';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import UserList from '../components/UserList';

const User = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const user = data?.user || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UserList
              user={user}
              title="Heres the current list of Users..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default User;
