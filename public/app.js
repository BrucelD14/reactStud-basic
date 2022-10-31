const root = document.querySelector("#root");
function App() {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const response = await request.json();
      console.log(response);
    }
    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);