import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [aValue, setAValue] = useState(0);
  const [bValue, setBValue] = useState(50);
  const [sumInput, setSumInput] = useState(50);
  function rangeAChanged(e) {
    setAValue(e.target.value);
  }
  function rangeBChanged(e) {
    setBValue(e.target.value);
  }
  function inputChanged(e) {
    setSumInput(e.target.value);
  }
    return (
      <div>
        <div id="max-sum-holder">
          <input onInput={inputChanged} type={'number'} value={sumInput} />
        </div>
        <div id="range-a-holder">
          <input type={'range'} onChange={rangeAChanged} value={aValue} max={sumInput - bValue} />
          <div id="range-a-value">{aValue}</div>
        </div>
        <div id="range-b-holder">
          <input type={'range'} onChange={rangeBChanged} value={bValue} max={sumInput - aValue} />
          <div id="range-b-value">{bValue}</div>
        </div>
        <div id="sum">
          {parseInt(aValue) + parseInt(bValue)}
        </div>
      </div>
    )
}
export default App;