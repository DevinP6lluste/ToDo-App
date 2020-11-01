import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
     <h1>Ciao</h1>
     <input />
     <button>Add Todo</button>

     <ul>
       <li>Learn Investing</li>
       <li>Travel a lot</li>
     </ul>
    </div>
  );
}

export default App;
