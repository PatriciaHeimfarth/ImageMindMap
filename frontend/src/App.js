import './App.css';


function App() {
  return (
    <div className="App">
      <Canvas></Canvas>
      <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"
        onChange={(event) => { uploadImage() }} />
    </div>
  );
  function uploadImage() { 
    var image = document.createElement("img");
    image.style.width = "60px";
    document.getElementById('canvas').appendChild(image);
    var preview = document.getElementById('canvas').querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
}

export default App;


function Canvas(props) {

  function printMousePos(event) {
    event.preventDefault();
    alert("clientX: " + event.clientX + " - clientY: " + event.clientY);
  }

  function markUploadPoint(event) {
    // printMousePos(event);
    var marker = document.createElement("div");
    marker.style.position = 'absolute';
    marker.style.backgroundColor = "red";
    marker.style.width = '5px';
    marker.style.height = '5px';
    marker.style.borderRadius = '50%'
    marker.style.top = event.clientY + 'px';
    marker.style.left = event.clientX + 'px';
    document.getElementById('canvas').appendChild(marker)
  }

  return (
    <div id='canvas' onClick={markUploadPoint}  style={{ backgroundColor: 'black', width: '800px', height: '800px' }}>
    
    </div>
  );


}



