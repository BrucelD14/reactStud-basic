const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function addToDoHandler(event) {
    event.preventDefault();

    setTodos([...todos, activity]);
    setActivity('');
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      <form onSubmit={addToDoHandler}>
        <input
          type="text"
          value={activity}
          placeholder="Nama aktivitas"
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map(function(todo) {
          return <li key={todo}>{todo}</li>
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
