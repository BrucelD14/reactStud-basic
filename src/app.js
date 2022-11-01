const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function saveToDoHandler(event) {
    event.preventDefault();

    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity,
      };

      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);

      return;
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
      },
    ]);
    setActivity("");
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      <form onSubmit={saveToDoHandler}>
        <input
          type="text"
          value={activity}
          placeholder="Nama aktivitas"
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
      </form>
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              {todo.activity}
              <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
              <button onClick={removeTodoHandler.bind(this, todo.id)}>
                Hapus
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
