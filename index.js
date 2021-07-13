// Import stylesheets
import './style.css';

// Write Javascript code!
function buildFunctions(arr) {

  var arr1 = [];

  for(var i = 0; i < 3; i++){
    arr1.push(function(){
      console.log(i);
    })
  }
  return arr1;
}

const fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
console.log(fs)
//console.log(arr1);


const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Advanced Closures</h1>`;