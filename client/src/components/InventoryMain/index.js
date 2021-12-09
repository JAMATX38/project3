import React from 'react';

const InventoryList = ({ items, title }) => {
  if (!items.length) {
    return <h3>No Items Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {items &&
          items.map((item) => (
            <div key={item._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {item.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {items.item ? items.item.length : 0}{' '}
                    endorsed skill
                    {items.item && items.item.length === 1 ? '' : 's'}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InventoryList;
