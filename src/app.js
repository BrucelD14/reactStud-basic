const root = document.querySelector("#root");

function App() {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();

      console.log(response);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
