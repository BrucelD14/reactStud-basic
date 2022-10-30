const root = document.querySelector("#root");

function App() {
  const fruits = ["Orange", "Avocado", "Banana", "Peach", "Grape"];

  return (
    <ul>
      {fruits.map(function (fruit) {
        return <li key={fruit}>{fruit}</li>;
      })}
    </ul>
  );
}

ReactDOM.render(<App />, root);
