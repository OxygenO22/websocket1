import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {message: 'Hello Viktor', id: '1', user: {id: '11', name: "Alex"}},
    {message: 'Hello Alex', id: '2', user: {id: '22', name: "Viktor"}},
  ])
  return (
    <div className="App">
      <div style={{border: '1px solid black', padding: '10px', height: '300px', width:'300px', msOverflowY: 'scroll'}}>
        {messages.map(m => 
          <div key={m.id}>
            <b>{m.user.name}: </b> {m.message}
            <hr/>
          </div>
        )}
      </div>
      <textarea></textarea>
      <button>Send</button>
    </div>
  );
}

export default App;
