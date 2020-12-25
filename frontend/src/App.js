import './App.css';

var currX = '50';
var currY = '50';

function App() {
  return (
    <div className="App" >
      <Canvas></Canvas>
      <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"
        onChange={(event) => { uploadImage() }} />
    </div>
  );
  function uploadImage() { 
    var image = document.createElement("img");
    image.style.width = "60px";
    image.style.position = "absolute";
    image.style.left = currX + 'px';
    image.style.top = currY + 'px';
    document.getElementById('canvas').appendChild(image);
    var preview = document.getElementById('canvas').getElementsByTagName('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview[preview.length-1].src = reader.result;
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
    currX = event.clientX;
    currY = event.clientY;
    document.getElementById('canvas').appendChild(marker)
  }

  return (
    <div id='canvas' onClick={markUploadPoint}  style={{ backgroundColor: 'black', width: '1800px', height: '800px' }}>
    
    </div>
  );


}



