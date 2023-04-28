
const root = ReactDOM.createRoot(document.querySelector('#root'));

const className = "box-3";

function klikIni_2(){
    alert('Halo 2');
}
function klikIni_3(nama){
    alert(`Halo 3 ${nama}`);
}
function klikIni_4(nama){
    alert(`Halo 4 ${nama}`);
}

const element = (
    <div>
        {/* inline css */}
        <div style={{fontFamily: "sans-serif", padding: 50, border: "1px solid black", textAlign: "center"}}>
            <h3>BOX 1</h3>
        </div>
        {/* external style */}
        <div className="box-2">
            <h3>BOX 2</h3>
        </div>
        {/* external style and store the class name into variable */}
        <div className={className}>
            <h3>BOX 3</h3>
        </div>



        {/* Event Handling 1 */}
        <div className="button-1">
            <button onClick={function() {
                alert('Halo 1')
            }}>1- Klik Ini</button>
        </div>
        {/* Event Handling 2 */}
        <div className="button-1">
            <button onClick={klikIni_2}>2- Klik Ini</button>
        </div>
        {/* Event Handling 3 */}
        <div className="button-1">
            <button onClick={function () {
                klikIni_3('Mamat')
            }}>3- Klik Ini</button>
        </div>
        {/* Event Handling 4 */}
        <div className="button-1">
            <button onClick={klikIni_4.bind(this ,'Fahri')}>4- Klik Ini</button>
        </div>
    </div>
);

root.render(element);