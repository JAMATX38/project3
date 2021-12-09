import React from 'react';
import { useQuery } from '@apollo/client';

import InventoryList from '../components/InventoryMain';
import ItemForm from '../components/Inventory';

import { QUERY_ALL_ITEMS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ALL_ITEMS);
  const items = data?.items || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ItemForm />
        </div>

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <InventoryList
              items={items}
              title="Heres a list of Inventory..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;