import React, { useState } from 'react';

import Page from './components/Page';
import HalfPage from './components/HalfPage';
import Flag from './components/Flag';
import Sliders from './components/Sliders';

const initialFlagData = {
  bgColor: 50,
  leftSize: 50,
  leftOpacity: 50,
  rightSize: 50,
  rightOpacity: 50
};

function App() {
  const [flagData, setFlagData] = useState(initialFlagData);

  const handleSliderChange = (key, value) => {
    setFlagData({
      ...flagData,
      [key]: value
    });
  };

  return (
    <Page>
      <HalfPage>
        <Flag {...flagData} />
      </HalfPage>

      <HalfPage>
        <Sliders flagData={flagData} handleChange={handleSliderChange} />
      </HalfPage>
    </Page>
  );
}

export default App;
