//import React from 'react';
// Import React without unused imports
import "./TaskCard.css";

interface TaskProps { // Corrected typo from TaskProp to TaskProps
  title: string;
  duedate: string;
  description: string; 
  deleteTaskItem: () => void;
}

const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.duedate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
              <button className="deleteTaskButton text-sm bg-red-500 p-1 text-white my-2 rounded-xl" onClick={props.deleteTaskItem}>Delete</button>
    </div>
  );
};



export default Task;
