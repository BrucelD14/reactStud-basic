const root = document.querySelector("#root");

function App() {
  const state = React.useState(0);

  const count = state[0];
  const updateCount = state[1];

  return (
    <>
      <button
        onClick={function () {
          updateCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          updateCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
