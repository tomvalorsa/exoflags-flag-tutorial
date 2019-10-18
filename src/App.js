import React, { useState } from 'react';

import Page from './components/Page';
import HalfPage from './components/HalfPage';
import Flag from './components/Flag';
import Sliders from './components/Sliders';
import Button from './components/Button';

const initialFlagData = {
  bgColor: 50,
  leftSize: 50,
  leftOpacity: 50,
  rightSize: 50,
  rightOpacity: 50
};

const randomNum = () => {
  return Math.floor(Math.random() * 101);
};

function App() {
  const [flagData, setFlagData] = useState(initialFlagData);

  const handleSliderChange = (key, value) => {
    setFlagData({
      ...flagData,
      [key]: value
    });
  };

  const handleClick = () => {
    const newValues = Object.keys(flagData).reduce((memo, key) => {
      memo[key] = randomNum();
      return memo;
    }, {});

    setFlagData(newValues);
  };

  return (
    <Page>
      <HalfPage>
        <Flag {...flagData} />
      </HalfPage>

      <HalfPage>
        <Sliders flagData={flagData} handleChange={handleSliderChange} />
        <Button onClick={handleClick}>Random!</Button>
      </HalfPage>
    </Page>
  );
}

export default App;
