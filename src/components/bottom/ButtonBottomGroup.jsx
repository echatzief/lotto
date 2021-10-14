import React, { useContext } from 'react';
import { Observer } from 'mobx-react';
import StoreContext from '../StoreContext';

const Clear = () => {
  const store = useContext(StoreContext);
  return (
    <Observer>
      {() => (
        <div className="clr-container p-5">
          <button
            type="button"
            className="clr-btn bg-transparent text-white-700 font-semibold py-2 px-4 border border-white-500 rounded mr-2"
            onClick={store.clear}
          >
            CLR
          </button>
          <button
            type="button"
            className="quick-pick-btn bg-transparent text-white-700 font-semibold py-2 px-4 border border-white-500 rounded"
            onClick={() => store.quickPick(store.currentTab - 1)}
          >
            Quick Pick
          </button>
        </div>
      )}
    </Observer>
  );
};

export default Clear;
