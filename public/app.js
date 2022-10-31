const root = document.querySelector("#root");
function App() {
  React.useEffect(function () {
    const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs").then(function (response) {
      console.log(response.json());
    });
    console.log(getData);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);