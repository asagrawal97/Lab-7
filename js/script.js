function init(){
  //add your javascrip between these two lines of code
  
  var clickButton = document.getElementById('entrybutton');
  clickButton.addEventListener('click', function(event){
    var showMessage = document.getElementById('entryinput').value;
    alert("Akshita Agrawal: " + message);
    document.getElementById('textoutput').innerHTML = message;
    console.log(message);
  })
  }
var window = document.getElementById('entrybutton');
window.addEventListener('load', init);