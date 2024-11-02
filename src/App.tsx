import React, { useState } from 'react';
import './App.css';
import { splitIntoWords } from './tests/01';
import Objects from './objects/Objects';

function App() {
  const sentence = "Hello my friends";
  const result = splitIntoWords(sentence);
  return (
    <div className="App">
      <Objects />
    </div>
  );
}

export default App;
