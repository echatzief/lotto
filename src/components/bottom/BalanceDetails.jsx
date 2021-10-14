import React, { useContext } from 'react';
import { Observer } from 'mobx-react';
import StoreContext from '../StoreContext';

const BalanceDetails = () => {
  const store = useContext(StoreContext);
  return (
    <Observer>
      {() => (
        <div className="bln-container p-5">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-right mt-2">
                Board Price $
                {` ${store.getBoardPrice()}`}
              </div>
              <div className="price md:text-xl lg:text-2xl font-normal leading-normal text-right">
                Total Price $
                {` ${store.getTotalPrice()}`}
              </div>
            </div>
            <div className="flex-1 ml-5">
              <button type="button" className={`${store.isBoardsValid() ? 'play-all-btn' : 'play-all-btn-disabled'} text-white font-bold py-2 px-9 rounded`}>
                Play All
              </button>
            </div>
          </div>
        </div>
      )}
    </Observer>
  );
};

export default BalanceDetails;
