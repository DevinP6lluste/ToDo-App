import './App.css';
import Todo from './Todo';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen the database and fetch new todos as they get added/removed
  useEffect(() => {
    // fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // Stops the refresh

db.collection('todos').add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})

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
         <Todo todo={todo}/>
       ))}
     </ul>
    </div>
  );
}

export default App;
