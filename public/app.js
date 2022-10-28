const root = document.querySelector("#root");
function saatKlik() {
  alert(1);
}
;
const element = /*#__PURE__*/React.createElement("button", {
  onClick: saatKlik
}, "Click Me");
ReactDOM.render(element, root);