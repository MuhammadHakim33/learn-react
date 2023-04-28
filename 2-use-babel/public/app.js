const root = ReactDOM.createRoot(document.querySelector('#root'));
const className = "box-3";
function klikIni_2() {
  alert('Halo 2');
}
function klikIni_3(nama) {
  alert(`Halo 3 ${nama}`);
}
function klikIni_4(nama) {
  alert(`Halo 4 ${nama}`);
}
const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "sans-serif",
    padding: 50,
    border: "1px solid black",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h3", null, "BOX 1")), /*#__PURE__*/React.createElement("div", {
  className: "box-2"
}, /*#__PURE__*/React.createElement("h3", null, "BOX 2")), /*#__PURE__*/React.createElement("div", {
  className: className
}, /*#__PURE__*/React.createElement("h3", null, "BOX 3")), /*#__PURE__*/React.createElement("div", {
  className: "button-1"
}, /*#__PURE__*/React.createElement("button", {
  onClick: function () {
    alert('Halo 1');
  }
}, "1- Klik Ini")), /*#__PURE__*/React.createElement("div", {
  className: "button-1"
}, /*#__PURE__*/React.createElement("button", {
  onClick: klikIni_2
}, "2- Klik Ini")), /*#__PURE__*/React.createElement("div", {
  className: "button-1"
}, /*#__PURE__*/React.createElement("button", {
  onClick: function () {
    klikIni_3('Mamat');
  }
}, "3- Klik Ini")), /*#__PURE__*/React.createElement("div", {
  className: "button-1"
}, /*#__PURE__*/React.createElement("button", {
  onClick: klikIni_4.bind(this, 'Fahri')
}, "4- Klik Ini")));
root.render(element);