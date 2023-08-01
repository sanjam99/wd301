import TaskCard from './TaskCard.jsx'

function App() {
  const message = "todo-manager app"

  return (
  <div>
    <h1>{message}</h1>
    <div>
      <h1>pending</h1>
      <TaskCard title="update blog" dueDate="20/20/2020" assigneeName="sanket jambhulkar"/>
      <TaskCard title="Email client" dueDate="21/20/2020" assigneeName="sanket jambhulkar"/>
    </div>
    <div>
      <h1>done</h1>
      <TaskCard title="washing clothes " CompletedAtDate="18/20/2020" assigneeName="sanket jambhulkar" />
      <TaskCard title="check Emails" CompletedAtDate="09/20/2020" assigneeName="sanket jambhulkar" />
    </div>
  </div>
  )
}

export default App
