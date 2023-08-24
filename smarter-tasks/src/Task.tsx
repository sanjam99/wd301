//import React from 'react'; 
 // Import React without unused imports 
import "./TaskCard.css"; 
import { TaskItem } from "./types";  
 interface TaskProps { // Corrected typo from TaskProp to TaskProps 
   item: TaskItem[];
   deleteTaskItem: () => void; 
 } 
  
 const Task = (props: TaskProps) => { 
   const item = props; 
   return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${item.id || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{item.duedate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.description}
          </p>
        </div>

        <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={props.deleteTaskItem}>
          X
        </button>
      </div>
    </div>
  );
 }; 
  
  
  
 export default Task;