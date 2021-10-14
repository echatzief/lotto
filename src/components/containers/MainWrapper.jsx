/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InfoBox from '../InfoBox';
import BottomLayout from './BottomLayout';
import BoardLayout from './BoardLayout';

class MainWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mx-auto p-5">
        <InfoBox />
        <BoardLayout />
        <BottomLayout />
      </div>
    );
  }
}

export default MainWrapper;
