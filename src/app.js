const root = document.querySelector("#root");

function saatKlik(msg) {
  alert(msg);
}

console.log(saatKlik.bind(this, "hello ini klik"));

const element = (
  <button onClick={saatKlik.bind(this, "hello ini klik")}>Click Me</button>
);

ReactDOM.render(element, root);
