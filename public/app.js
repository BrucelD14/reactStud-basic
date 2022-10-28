const root = document.querySelector("#root");
function saatKlik(msg) {
  alert(msg);
}
console.log(saatKlik.bind(this, "hello ini klik"));
const element = /*#__PURE__*/React.createElement("button", {
  onClick: saatKlik.bind(this, "hello ini klik")
}, "Click Me");
ReactDOM.render(element, root);