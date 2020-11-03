import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Learn Investing', 'Travel a lot']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
     <h1>Ciao</h1>
     <input value={input} onChange={event => setInput(event.target.value)} />
     <button onClick={addTodo}>Add Todo</button>

     <ul>
       {todos.map(todo => (
         <li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
