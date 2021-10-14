/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../../css/Tabs.css';
import TabHeader from '../board/TabHeader';
import TabPanel from '../board/TabPanel';
import TabSystem from '../board/TabSystem';

const BoardLayout = () => (
  <div className="grid grid-cols-1">
    <TabHeader />
    <div>
      <TabPanel />
      <TabSystem />
    </div>
  </div>
);

export default BoardLayout;
