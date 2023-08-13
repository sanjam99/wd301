import React from 'react';
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  duedate: string;
  description: string; 
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      duedate: "",
      description: ""
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with ${this.state.title}`);
    const newTask = {
      title: this.state.title,
      duedate: this.state.duedate,
      description: this.state.description
    };
      this.props.addTask(newTask); 
   this.setState({title: "" }); 
   this.setState({duedate:""}) 
   this.setState({description:""})
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };
  duedateChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => { 
   console.log(`${event.target.value}`); 
   this.setState({ duedate: event.target.value }); 
 }; 
 descriptionChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => { 
   console.log(`${event.target.value}`); 
   this.setState({ description: event.target.value }); 
 };
  render() {
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
          id="todoTitle"
          required
        />
        <label htmlFor="input" className="block mb-2">
          Duedate
        </label>
        <input
          className="border border-solid border-gray-300 rounded w-full py-2 px-3 line"
          name="input"
          type="text"
          value={this.state.duedate}
          onChange={this.duedateChanged}
          id="todoDueDate"
          required
        />
        <label htmlFor="input" className="block mb-2">
          description
        </label>
        <input
          className="border border-solid border-gray-300 rounded w-full py-2 px-3 line"
          name="input"
          type="text"
          value={this.state.description}
          onChange={this.descriptionChanged}
          id="todoDescription"
          required
        />
        <button className="rounded bg-blue-700 p-4" type="submit" id="addTaskButton" >
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
