const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      <h1>Application</h1>
      <p>{login ? <b>Kamu sudah login</b> : <i>Kamu belum login</i>}</p>
      <button
        onClick={function () {
          setLogin(true);
        }}
      >
        Login
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
