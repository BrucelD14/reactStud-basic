/**
        const root = document.querySelector('#root');
        console.log(root);
        
        const element = document.createElement('h1');
        console.log(element);
        element.textContent = 'Hello from JS';
        element.className = 'heading-1';
        
        root.appendChild(element);
        **/

const root = document.querySelector('#root');
console.log("hello dari");
function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);
}
tick();
setInterval(function () {
  tick();
}, 1000);