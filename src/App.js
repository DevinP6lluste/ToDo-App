import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Learn Investing', 'Travel a lot']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault(); // Stops the refresh
    setTodos([...todos, input]);
    setInput(''); // Clear the input after submit
  }

  return (
    <div className="App">
     <h1>Ciao</h1>
     <form>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button type="submit" onClick={addTodo}>Add Todo</button>
     </form>

     <ul>
       {todos.map(todo => (
         <li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
