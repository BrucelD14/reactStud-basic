const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);


  // mount, did mount, did update
  React.useEffect(function () {
    console.log("data fetching");
  });

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

ReactDOM.render(<App />, root);
