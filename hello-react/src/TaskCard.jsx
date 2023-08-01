import './TaskCard.css'

const TaskCard = (props) => {
  if(props.dueDate){
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>due date: {props.dueDate}</p>
      <p>Assignee: {props.assigneeName} </p>
    </div>
  )
  }
  if(props.CompletedAtDate){
    return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>Completed on: {props.CompletedAtDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
    )
  }
}

export default TaskCard