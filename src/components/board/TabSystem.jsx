/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { Observer } from 'mobx-react';
import StoreContext from '../StoreContext';

const TabSystem = () => {
  const store = useContext(StoreContext);
  return (
    <Observer>
      {() => (
        <div className="tab-system p-5">
          <div className="flex p-3 items-center">
            <div>
              SYSTEM
            </div>
            <div className="ml-5">
              {[5, 6, 7, 8, 9].map((n, idx) => (
                <button
                  type="button"
                  key={`system-${idx}`}
                  onClick={() => store.changeCurrentSystem(n)}
                  className={`inline ${store.getCurrentSystem() === n ? 'system-item-active' : ''} ${n === 5 ? 'left-end-system-item' : 'system-item'} ${n === 9 ? 'right-end-system-item' : 'system-item'} w-8 p-2 mr-1`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </Observer>
  );
};

export default TabSystem;
