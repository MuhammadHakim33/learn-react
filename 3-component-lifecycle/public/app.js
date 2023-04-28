/**
 * Learning outcame
 * 1. Component
 * 2. State
 * 3. Component lifecycle
 * 4. Destroy old component instance
 * 
 * Term 
 * 1. mount -> istilah ketika komponen pertama kali dirender ke dalam dom tree
 */

// Component
function Section() {
  // State
  const [count, setCount] = React.useState(1);
  const [boolean, setBoolean] = React.useState(false);

  // Component lifecycle
  React.useEffect(function () {
    console.log(document.getElementsByTagName('h3'));

    // Destroy old component instance
    // in this code, not really destroy old component instance, just simple example
    return function () {
      console.log('Destroy Element');
    };
  }, [count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "COUNT"), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setBoolean(!boolean);
      alert(boolean);
    }
  }, "Alert")));
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render( /*#__PURE__*/React.createElement(Section, null));