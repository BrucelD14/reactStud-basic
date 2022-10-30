const root = document.querySelector("#root");
function App() {
  const namaRef = React.useRef(null);
  function ketikaSubmit(event) {
    event.preventDefault();
    const nama = namaRef.current.value;
    console.log('Nama: ', nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    ref: namaRef
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);