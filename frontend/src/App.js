import './App.css';


function App() {
  return (
    <div className="App">
      <Canvas></Canvas>
    </div>
  );
}

export default App;


function Canvas(props) {
  function printMousePos(event) {
    event.preventDefault();
    alert("clientX: " + event.clientX + " - clientY: " + event.clientY);
  }
  return (
    <div onClick={printMousePos} style={{ backgroundColor: 'black', width: '800px', height: '800px' }}>

    </div>
  );


}



