console.log("Sanity Check");

function hello(){
  console.log("hello");
  var changeDiv= document.getElementById('divElement');
  document.innerHTML = "hi";
  console.log(changeDiv);
}