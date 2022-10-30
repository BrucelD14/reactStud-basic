const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);

  React.useEffect(function () {
    setTimeout(function() {
      judulRef.current.textContent = 'Aplikasi';

    }, 1000)
  }, []);

  return (
    <>
      <h1 ref={judulRef}>Application</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
