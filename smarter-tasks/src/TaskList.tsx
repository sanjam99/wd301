import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTaskItem: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task) => (
    <Task
      key={task.id} // Use the actual task's id as the key
      item={task} // Pass the task as an item prop
      removeTask={() => {
        if (task.id !== undefined) {
          props.deleteTaskItem(task.id); // Pass task's id to deleteTaskItem
        }
      }}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
