const root = document.querySelector("#root");
function App() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  function addToDoHandler(event) {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity('');
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addToDoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    placeholder: "Nama aktivitas",
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);