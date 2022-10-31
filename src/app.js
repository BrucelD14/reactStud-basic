const root = document.querySelector("#root");

function App() {
  React.useEffect(function () {
    const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs").then(
      function (response) {
        console.log(response.json());
      }
    );
    console.log(getData);
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
