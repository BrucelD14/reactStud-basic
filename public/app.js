const root = document.querySelector("#root");
function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log(document.getElementById("judul"));
  }, [diklik]);
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
setTimeout(function () {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
}, 1000);