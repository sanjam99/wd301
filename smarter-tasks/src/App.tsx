import React,{useState} from "react";
import './App.css'
import Task from "./Task"; 
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskApp from "./TaskApp";

function App() {
  return (
    <div className="App">
      <TaskApp />
    </div>
  );
}
export default App;
