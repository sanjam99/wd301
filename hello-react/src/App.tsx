import TaskCard from './TaskCard.tsx';

function App() {
  const message = "todo-manager app";

  return (
    <div>
      <h1>{message}</h1>
      <div>
        <h1>pending</h1>
        <TaskCard title="update blog" dueDate="27/20/2020" assigneeName="sanket jambhulkar" />
        <TaskCard title="Email client!" dueDate="21/20/2020" assigneeName="sanket jambhulkar" />
        <TaskCard title="Email client!"  assigneeName="sanket jambhulkar" />
      </div>
      <div>
        <h1>done</h1>
        <TaskCard title="washing clothes" completedAtDate="18/20/2020" assigneeName="sanket jambhulkar" />
        <TaskCard title="check Emails" completedAtDate="09/20/2020" assigneeName="sanket jambhulkar" />
        <TaskCard title="eat roti!" completedAtDate="09/20/2020" assigneeName="sanket jambhulkar" />
      </div>
    </div>
  );
}

export default App;
