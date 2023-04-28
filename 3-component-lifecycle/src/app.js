/**
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
        return function (){
            console.log('Destroy Element');
        };
    }, [count]);

    return (
        <>
            <h3>COUNT</h3>
            <div className="section">
                <button onClick={function () {
                    setCount(count - 1)
                }}>-</button>
                <span>{count}</span>
                <button onClick={function () {
                    setCount(count + 1)
                }}>+</button>
            </div>
            <div className="section">
                <button onClick={function () {
                    setBoolean(!boolean);
                    alert(boolean);
                }}>Alert</button>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Section />);