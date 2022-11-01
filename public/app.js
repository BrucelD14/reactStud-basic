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
        activity
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity("");
  }
  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }
  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }
  function cancelEditHandler() {
    setEdit({});
    setActivity("");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveToDoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    placeholder: "Nama aktivitas",
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "Simpan Perubahan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal Edit")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);