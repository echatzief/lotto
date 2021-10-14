import React, { Component } from 'react';
import BalanceDetails from '../bottom/BalanceDetails';
import ButtonBottomGroup from '../bottom/ButtonBottomGroup';

class BottomLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <div className="contents">
          <div className="flex-1"><ButtonBottomGroup /></div>
          <div className="flex-1"><BalanceDetails /></div>
        </div>
      </div>
    );
  }
}

export default BottomLayout;
