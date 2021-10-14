/* eslint-disable react/prop-types */
import React from 'react';
import { useLocalObservable } from 'mobx-react';
import { toJS } from 'mobx';
import StoreContext from './StoreContext';

const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    tabs: [1, 2, 3],
    activeTabs: [],
    currentTab: 1,
    boardPrice: 0.00,
    hasError: false,
    errorMessage: '',
    boards: [{
      selected: [],
      system: 6,
      error: false,
      errorMessage: '',
      boardPrice: 0,
    }, {
      selected: [],
      system: 6,
      error: false,
      errorMessage: '',
      boardPrice: 0,
    }, {
      selected: [],
      system: 6,
      error: false,
      errorMessage: '',
      boardPrice: 0,
    }],
    addNewTab: () => {
      if (store.tabs.length < 6) {
        const t = store.tabs;
        t.push(store.tabs.length + 1);
        store.tabs = t;

        const b = store.boards;
        b.push({
          selected: [],
          system: 6,
          error: false,
          errorMessage: '',
          boardPrice: 0,
        });
        store.boards = b;
      }
    },
    changeCurrentTab: (t) => {
      const idx = toJS(store.currentTab) - 1;
      store.currentTab = t;
      store.validateBoard(idx);
    },
    changeCurrentSystem: (s) => {
      const idx = toJS(store.currentTab) - 1;
      store.boards[idx] = {
        ...toJS(store.boards[idx]),
        system: s,
      };
      store.validateBoard(idx);
    },
    getBoardPrice: () => toJS(store.boards[store.currentTab - 1].boardPrice).toFixed(2),
    getTotalPrice: () => {
      let totalPrice = 0;
      for (let i = 0; i < toJS(store.boards).length; i += 1) {
        totalPrice += toJS(store.boards[i].boardPrice);
      }
      return totalPrice;
    },
    getCurrentSystem: () => toJS(store.boards[store.currentTab - 1].system),
    validateBoard: (idx) => {
      const selected = toJS(store.boards[idx].selected);
      const diff = toJS(store.boards[idx].system) - selected.length;

      if (selected.length > 0 && diff > 0) {
        store.boards[idx] = {
          ...toJS(store.boards[idx]),
          selected: [...toJS(store.boards[idx].selected)],
          error: true,
          errorMessage: `Select ${diff} more numbers.`,
          boardPrice: 0,
        };
      } else if (selected.length > 0 && diff < 0) {
        store.boards[idx] = {
          ...toJS(store.boards[idx]),
          selected: [...toJS(store.boards[idx].selected)],
          error: true,
          errorMessage: `Remove ${-diff} numbers.`,
          boardPrice: 0,
        };
      } else {
        store.boards[idx] = {
          ...toJS(store.boards[idx]),
          selected: [...toJS(store.boards[idx].selected)],
          error: false,
          errorMessage: '',
          boardPrice: toJS(store.boards[idx].selected).length > 0
            ? store.getPriceForEachSystem(toJS(store.boards[idx].system))
            : 0,
        };
      }
    },
    getSelectedFromBoard: () => toJS(store.boards[store.currentTab - 1].selected),
    hasBoardError: () => toJS(store.boards[store.currentTab - 1].error),
    getBoardErrorMessage: () => toJS(store.boards[store.currentTab - 1].errorMessage),
    isBoardsValid: () => {
      let isFilledIn = 0;
      for (let i = 0; i < toJS(store.boards).length; i += 1) {
        if (toJS(store.boards[i].error) === true) {
          return false;
        }
        if (toJS(store.boards[i].selected).length > 0) {
          isFilledIn += 1;
        }
      }

      // Check if one or more boards are filled
      if (isFilledIn > 0) {
        return true;
      }
      return false;
    },
    addNewNumberToBoard: (n) => {
      const idx = toJS(store.currentTab) - 1;
      store.boards[idx] = {
        ...toJS(store.boards[idx]),
        selected: [...toJS(store.boards[idx].selected), Number(n)],
      };
      store.validateBoard(idx);
    },
    removeNumberFromBoard: (n) => {
      const idx = toJS(store.currentTab) - 1;
      const arr = toJS(store.boards[idx].selected);
      arr.splice(arr.indexOf(Number(n)), 1);
      store.boards[idx] = {
        ...toJS(store.boards[idx]),
        selected: [...arr],
      };
      store.validateBoard(idx);
    },
    clear: () => {
      const idx = toJS(store.currentTab) - 1;
      store.boards[idx] = {
        selected: [],
        system: 6,
        error: false,
        errorMessage: '',
        boardPrice: 0,
      };
      store.validateBoard(idx);
    },
    clearAll: () => {
      for (let i = 0; i < toJS(store.boards).length; i += 1) {
        store.boards[i] = {
          selected: [],
          system: 6,
          error: false,
          errorMessage: '',
          boardPrice: 0,
        };
        store.validateBoard(i);
      }
    },
    getPriceForEachSystem: (s) => {
      switch (s) {
        case 6:
          return 1;
        case 7:
          return 7;
        case 8:
          return 28;
        case 9:
          return 84;
        default:
          return 0;
      }
    },
    quickPick: (id) => {
      const idx = id || (id === 0 ? 0 : (toJS(store.currentTab) - 1));
      const system = toJS(store.boards[idx].system);
      const selected = [];

      for (let i = 0; i < system; i += 1) {
        selected.push(Math.floor(Math.random() * (49 - 1 + 1)) + 1);
        store.boards[idx] = { ...store.boards[idx], selected };
      }
      store.validateBoard(idx);
    },
    quickPickAll: () => {
      for (let i = 0; i < toJS(store.boards).length; i += 1) {
        store.quickPick(i);
      }
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
