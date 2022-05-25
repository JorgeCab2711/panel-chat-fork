import React from 'react';
import GreenCircle from '../img/greenCir.png';
import redCirc from '../img/redCirc.png';
import grayCirc from '../img/grayCirc.png';
import LeftPanel from '../Components/LeftPanel.js';
import Panel from '../Components/Panel.js';
import './style.scss';

function App() {
  return (
    <>
      <div className="container">
        <LeftPanel home="" self="" settings="" logout=""></LeftPanel>
        <Panel></Panel>
      </div>
    </>
  );
}

export default App;
