import Task from "./Task"; 
 import { TaskItem } from "./types"; 
  
 interface Props { 
   tasks: TaskItem[]; 
   deleteTaskItem: (id:number) => void 
 } 
  
 const TaskList = (props:Props) => { 
   const list = props.tasks.map((task, id) => ( 
     <Task key={id} title={task.title} duedate={task.duedate} description={task.description} deleteTaskItem={() => { props.deleteTaskItem(id) }} /> 
   )); 
     return <>{list}</> 
  
 } 
  
 export default TaskList;