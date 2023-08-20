import React from 'react';
import { TaskItem } from "./types";
interface TaskFormState { 
   title: string;
  duedate: string;
  description: string;  
 } 
  
 interface TaskFormProps { 
   addTask: (task: TaskItem) => void; 
 } 
  
 const TaskForm = (props : TaskFormProps) => { 
   const [formState, setFormState] = React.useState<TaskFormState>({ 
     title: "", 
     duedate: "", 
     description: "", 
   }); 
   const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => { 
     console.log(`${event.target.value}`); 
     setFormState({ ...formState, title: event.target.value }); 
   }; 
   const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = ( 
     event 
   ) => { 
     console.log(`${event.target.value}`); 
     setFormState({ ...formState, description: event.target.value }); 
   }; 
   const dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => { 
     console.log(`${event.target.value}`); 
     setFormState({ ...formState, duedate: event.target.value }); 
   }; 
   const addTask: React.FormEventHandler<HTMLFormElement> = (event) => { 
     event.preventDefault(); 
     console.log(`Submitted the form with`); 
     if (formState.title.length === 0 || formState.duedate.length === 0) { 
       return; 
     } 
     props.addTask(formState); 
     setFormState({ title: "", description: "", duedate: "" }); 
   }; 
   return ( 
     <form onSubmit={addTask}> 
       <div className="grid md:grid-cols-4 md:gap-3"> 
         <div className="relative z-0 w-full mb-6 group"> 
           <input 
             id="todoTitle" 
             name="todoTitle" 
             type="text" 
             value={formState.title} 
             onChange={titleChanged} 
             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
             placeholder=" " 
           /> 
           <label
          htmlFor="todoTitle"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Todo Title
        </label> 
         </div> 
         <div className="relative z-0 w-full mb-6 group"> 
           <input 
             id="todoDescription" 
             name="todoDescription" 
             type="text" 
             value={formState.description} 
             onChange={descriptionChanged} 
             placeholder=" " 
             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
           /> 
           <label
          htmlFor="todoDescription"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Description
        </label> 
         </div> 
         <div className="relative z-0 w-full mb-6 group"> 
           <input 
             id="todoDueDate" 
             name="todoDueDate" 
             type="date" 
             value={formState.duedate} 
             onChange={dateChanged} 
             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
             placeholder=" " 
             required 
           /> 
           <label
          htmlFor="todoDueDate"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Due Date
        </label>
         </div> 
         <div className="relative z-0 w-full mb-6 group"> 
           <button 
           id="addTaskButton" 
             type="submit" 
             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
           > 
             Add item 
           </button> 
         </div> 
       </div> 
     </form> 
   ); 
 }


// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       duedate: "",
//       description: ""
//     };
//   }

//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     console.log(`Submitted the form with ${this.state.title}`);
//     const newTask = {
//       title: this.state.title,
//       duedate: this.state.duedate,
//       description: this.state.description
//     };
//       this.props.addTask(newTask); 
//   this.setState({title: "" }); 
//   this.setState({duedate:""}) 
//   this.setState({description:""})
//   };

//   titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     this.setState({ title: event.target.value });
//   };
//   duedateChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => { 
//   console.log(`${event.target.value}`); 
//   this.setState({ duedate: event.target.value }); 
// }; 
// descriptionChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => { 
//   console.log(`${event.target.value}`); 
//   this.setState({ description: event.target.value }); 
// };
//   render() {
//     return (
//       <form
//         className="p-4 border border-solid border-gray-400 rounded-md"
//         onSubmit={this.addTask}
//       >
//         <label htmlFor="input" className="block mb-2">
//           Input
//         </label>
//         <input
//           className="border border-solid border-gray-300 rounded w-full py-2 px-3 line"
//           name="input"
//           type="text"
//           value={this.state.title}
//           onChange={this.titleChanged}
//           id="todoTitle"
//           required
//         />
//         <label htmlFor="input" className="block mb-2">
//           Duedate
//         </label>
//         <input
//           className="border border-solid border-gray-300 rounded w-full py-2 px-3 line"
//           name="input"
//           type="text"
//           value={this.state.duedate}
//           onChange={this.duedateChanged}
//           id="todoDueDate"
//           required
//         />
//         <label htmlFor="input" className="block mb-2">
//           description
//         </label>
//         <input
//           className="border border-solid border-gray-300 rounded w-full py-2 px-3 line"
//           name="input"
//           type="text"
//           value={this.state.description}
//           onChange={this.descriptionChanged}
//           id="todoDescription"
//           required
//         />
//         <button className="rounded bg-blue-700 p-4" type="submit" id="addTaskButton" >
//           Add item
//         </button>
//       </form>
//     );
//   }
// }

export default TaskForm;
