console.log("Sanity Check");

function hello(){
  console.log("hello");
  var changeDiv= document.getElementById('divElement');
  changeDiv.innerHTML = "wat";
  console.log(changeDiv);
}

function soFast(){
  var classElements = document.getElementsByClassName('same');
  for (var i = 0; i < classElements.length; i++) {
    classElements[i].innerHTML = "wat";
  }
}