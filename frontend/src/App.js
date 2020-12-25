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
   // printMousePos(event);
    var marker = document.createElement("div");
    marker.style.backgroundColor = "red";  
    marker.style.width = '5px';
    marker.style.height = '5px';
    document.getElementById('canvas').appendChild(marker)
    
  }

  return (
    <div id='canvas' onClick={uploadImage} style={{ backgroundColor: 'black', width: '800px', height: '800px' }}>
     </div>
  );


}



