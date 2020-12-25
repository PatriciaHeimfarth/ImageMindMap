import './App.css';


function App() {
  return (
    <div className="App">
      <Canvas></Canvas>
      <input type="file" />
    </div>
  );
}

export default App;


function Canvas(props) {
  function printMousePos(event) {
    event.preventDefault();
    alert("clientX: " + event.clientX + " - clientY: " + event.clientY);
  }

  function uploadImage(event){
    printMousePos(event);

    
  }

  return (
    <div onClick={uploadImage} style={{ backgroundColor: 'black', width: '800px', height: '800px' }}>

    </div>
  );


}



