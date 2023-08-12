import React from 'react'; // Import React without unused imports
import "./TaskCard.css";

interface TaskProps { // Corrected typo from TaskProp to TaskProps
  title: string;
  duedate: string;
  description: string; 
}

class Task extends React.Component<TaskProps> { // Changed extends Component to extends React.Component
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">
          Due Date: {this.props.duedate}
        </p>
        <p className="text-sm text-slate-500">
          Description: {this.props.description} 
        </p>
      </div>
    );
  }
}

export default Task;
