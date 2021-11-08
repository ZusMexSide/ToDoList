import React from 'react'
import { ToDoProvider } from '../TodoContext'
import { AppUI } from './AppUI'


function App() {


  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
