import React, { useEffect } from "react"; // Import React without unused imports 
 import { TaskItem } from "./types"; 
 import TaskForm from "./TaskForm"; 
 import TaskList from "./TaskList"; 
 import { useLocalStorage } from "./hooks/useLocalStorage";
  
 interface TaskAppProps {} // Corrected typo from TaskAppProp to TaskAppProps 
 interface TaskAppState { 
   tasks: TaskItem[]; 
 } 
 
 const TaskApp = () => {
  // const [taskAppState, setTaskAppState] = React.useState<TaskAppState>({
  //  tasks: [],
  // });
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
   tasks: [],
 });
  React.useEffect(() => {
  const id = setTimeout(() => {
    console.log(`Saved items to backend...`);
  }, 5000);
  return () => {
    console.log("clear or cancel any existing network call");
    clearTimeout(id);
  };
}, [taskAppState.tasks]);
  
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  
  const deleteTaskItem = (id: number) => { 
     taskAppState.tasks.splice(id, 1) 
     setTaskAppState({ tasks: [...taskAppState.tasks] }) 
   };
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList deleteTaskItem={deleteTaskItem} tasks={taskAppState.tasks} />
        </div>
      </div>
    </div>
  );
};
// class TaskApp extends React.Component<TaskAppProps, TaskAppState> { // Changed extends Component to extends React.Component 
//   constructor(props: TaskAppProps) { 
//     super(props); 
//     this.state = { 
//       tasks: [], 
//     }; 
//   } 
  
//   addTask = (task: TaskItem) => { 
//     this.setState((state) => { 
//       return { 
//         tasks: [...state.tasks, task], 
//       }; 
//     }); 
//   }; 

  
 export default TaskApp;