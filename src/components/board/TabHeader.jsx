/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { Observer } from 'mobx-react';
import Tab from './Tab';
import StoreContext from '../StoreContext';

const TabHeader = () => {
  const store = useContext(StoreContext);
  return (
    <Observer>
      {() => (
        <div className="flex">
          <div className="flex-1">
            <div>
              <div className="flex">
                {
                  store.tabs.map((i, idx) => <Tab key={`tab-${idx}`} index={`0${i}`} isSelected={store.currentTab === i} changeTab={() => store.changeCurrentTab(i)} isActive={store.currentTab === i && store.getBoardPrice() > 0} />)
                }
                {
                  store.tabs.length < 6
                   && (
                   <div>
                     <button type="button" className="mt-2 ml-2 px-3 py-1 block border rounded-full font-bold plus-btn" onClick={store.addNewTab}>
                       +
                     </button>
                   </div>
                   )
                }
              </div>
            </div>
          </div>
          <div className="flex-1 text-right">
            <button
              type="button"
              className="mt-2 px-3 py-1 border rounded font-bold quick-pick-btn mr-2"
              onClick={store.quickPickAll}
            >
              Quick Pick All
            </button>
            <button
              type="button"
              className="mt-2 px-3 py-1 border rounded font-bold plus-btn"
              onClick={store.clearAll}
            >
              CLR All
            </button>
          </div>
        </div>
      )}
    </Observer>
  );
};

export default TabHeader;
