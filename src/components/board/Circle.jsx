/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Observer } from 'mobx-react';
import StoreContext from '../StoreContext';

const Circle = ({ number, isSelected }) => {
  const store = useContext(StoreContext);
  return (
    <Observer>
      {() => (
        <span className="m-1">
          <button
            type="button"
            className={`circle py-4 px-5 rounded-full ${isSelected ? 'circle-selected' : ''}`}
            onClick={
              isSelected
                ? () => store.removeNumberFromBoard(number)
                : () => store.addNewNumberToBoard(number)
            }
          >
            {number}
          </button>
        </span>
      )}
    </Observer>
  );
};

Circle.propTypes = {
  number: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
export default Circle;
