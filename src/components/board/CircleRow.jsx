/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Circle from './Circle';

const CircleRow = ({ numbers, selectedNumbers }) => (
  <div className="grid grid-cols-10 gap-4 p-3">
    {numbers && numbers.map((n, idx) => (<Circle key={`circle-${idx}`} number={n} isSelected={selectedNumbers.includes(Number(n))} />))}
  </div>
);

CircleRow.propTypes = {
  numbers: PropTypes.array.isRequired,
  selectedNumbers: PropTypes.array.isRequired,
};

export default CircleRow;
