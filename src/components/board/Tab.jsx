/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  isActive, isSelected, index, changeTab,
}) => (
  <div>
    <button type="button" className={`py-3 px-5 block font-medium ${isSelected ? 'tab-selected' : ''}`} onClick={changeTab}>
      <div className="flex items-center">
        <div className={`${isSelected ? (isActive ? 'dot' : 'outlined-dot') : ''} mr-2`} />
        <div>
          {index}
        </div>
      </div>
    </button>
  </div>
);

Tab.defaultProps = {
  isSelected: false,
  isActive: false,
};

Tab.propTypes = {
  isSelected: PropTypes.bool,
  isActive: PropTypes.bool,
  index: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default Tab;
