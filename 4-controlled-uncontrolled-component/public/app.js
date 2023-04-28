/**
 * Learning outcame
 * 1. controlled and uncontrolled component
 */

function Section() {
  const [input, setInput] = React.useState('');
  const nama = React.useRef(null);
  function kirim(e) {
    e.preventDefault();
    nama.current.textContent = input;
    setInput(" ");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: kirim
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama : "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: input,
    onChange: function (e) {
      setInput(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Nama : ", /*#__PURE__*/React.createElement("span", {
    ref: nama
  }))));
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render( /*#__PURE__*/React.createElement(Section, null));