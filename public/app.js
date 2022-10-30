const root = document.querySelector("#root");
function App() {
  const fruits = ["Orange", "Avocado", "Banana", "Peach", "Grape"];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  }));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);