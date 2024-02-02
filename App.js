import React, { useState } from 'react';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [additionalInput, setAdditionalInput] = useState('');

  const handleAddButtonClick = () => {
    console.log('Add button clicked');
  };

  const handleRedButtonClick = () => {
    console.log('Red button clicked');
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <h1>Directories and Movies</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Input 1"
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Input 2"
          style={{ marginRight: '10px' }}
        />
        <button
          onClick={handleAddButtonClick}
          style={{ backgroundColor: 'green', color: 'white', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          placeholder="Input 3"
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          value={additionalInput}
          onChange={(e) => setAdditionalInput(e.target.value)}
          placeholder="Additional Input"
          style={{ marginRight: '10px' }}
        />
        <button
          onClick={handleRedButtonClick}
          style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer' }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
