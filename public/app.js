const root = document.querySelector("#root");
function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);

  // mount, did mount, did update
  React.useEffect(function () {
    console.log("init carousel");
    return function () {
      console.log("destroy carousel");
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, "Klik aku dong"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah"), "Nilai saat ini: ", count);
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);