const root = document.querySelector("#root");

function saatKlik() {
    alert(1);
  };

const element = (
  <button
    onClick={saatKlik}
  >
    Click Me
  </button>
);

ReactDOM.render(element, root);
