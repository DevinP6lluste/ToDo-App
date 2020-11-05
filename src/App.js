import './App.css';
import Todo from './Todo';
import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

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

      <FormControl>
          <InputLabel>Write a ToDo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add ToDo</Button>
     </form>

     <ul>
       {todos.map(todo => (
         <Todo text={todo}/>
       ))}
     </ul>
    </div>
  );
}

export default App;
