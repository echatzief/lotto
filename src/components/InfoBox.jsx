import React, { useContext } from 'react';
import { Observer } from 'mobx-react';
import StoreContext from './StoreContext';

const InfoBox = () => {
  const store = useContext(StoreContext);
  return (
    <Observer>
      {() => (
        <div className="grid grid-flow-row auto-rows-max pb-5">
          {
            store.hasBoardError() && (
              <div className="error-banner p-3 flex">
                <div className="inline-block rounded-full h-6 w-6 flex items-center justify-center border mr-2">&#33;</div>
                <div className="inline-block">{store.getBoardErrorMessage()}</div>
              </div>
            )
          }
          {
            !store.hasBoardError() && store.getSelectedFromBoard().length === 0 && (
              <div className="p-3">Pick your numbers</div>
            )
          }
        </div>
      )}
    </Observer>
  );
};

export default InfoBox;
