const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      console.log(document.getElementById("judul"));
    },
    [diklik]
  );

  return (
    <>
      <h1 id="judul">Hello ini judul</h1>
      <button
        onClick={function () {
          setDiklik(true);
        }}
      >
        Klik aku dong
      </button>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      Nilai saat ini: {count}
    </>
  );
}

setTimeout(function () {
  ReactDOM.render(<App />, root);
}, 1000);
