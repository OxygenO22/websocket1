import React, { useState } from 'react';
import './App.css';
import { splitIntoWords } from './tests/01';

function App() {
  const sentence = "Hello my friends";
  const result = splitIntoWords(sentence);
  console.log(result);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
