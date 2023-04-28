function Section() {
    const [input, setInput] = React.useState('');
    const nama = React.useRef(null);

    function kirim(e) {
        e.preventDefault();
        nama.current.textContent = input;
        setInput(" ");
    }

    return (
        <>
            <form onSubmit={kirim}>
                <div>
                    <label>Nama : </label>
                    <input type="text" name="nama" value={input} onChange={function (e) {
                        setInput(e.target.value);
                    }}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                <h3>Nama : <span  ref={nama}></span></h3>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Section />);