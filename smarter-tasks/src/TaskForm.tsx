import React, { Component } from 'react';
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
}

interface Props {
  tasks: TaskItem[];
}

interface State {}
class TaskList extends React.Component<Props, State> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: ""
    }
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log(`Submitted the form with ${this.state.title}`);
  const newTask = {
    title: this.state.title,
  };
  this.props.addTask(newTask);
  this.setState({ title: "" });
};

titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  this.setState({ title: event.target.value });
};

  render(){
    return (
            <form 
         className="p-4 border border-solid border-gray-400 rounded-md" 
         onSubmit={this.addTask} 
       > 
         <label htmlFor="input" className="block mb-2"> 
           Input 
         </label> 
         <input 
           className="border border-solid border-gray-300 rounded w-full py-2 px-3 line" 
           name="input" 
           type="text" 
           value={this.state.title} 
           onChange={this.titleChanged} 
         /> 
         <button className="rounded bg-blue-700 p-4" type="submit">Add item</button> 
       </form>
    )
  }
}
 
export default TaskList;