window.addEventListener('load', function(){
  var body = document.getElementsByTagName('body')[0];
  var boxMax;
  for (var i = 0; i < 2; i++) {
    boxMax = createBox(body,'boxMax');
    if(i == 0){
      boxMax.classList.toggle('red');
      boxMax.style.background = "#ED462F";
      boxMax.style.marginBottom = "20px";
      var box = createBox(boxMax,'box');
      box.classList.toggle('purple');
      box.style.background = "#752E80";
      box.style.position = "relative";
      box.style.top = "50px";
      boxMin = createBox(box,'boxMin');
      boxMin.classList.toggle('yellow');
      boxMin.style.background = "#FFF835";
      boxMin.style.position = "absolute";
    }
    else{
      boxMax.classList.toggle('blue');
      boxMax.style.background = "#0048FB";
      boxMax.style.position = "relative";
      var box = createBox(boxMax,'box');
      box.classList.toggle('green');
      box.style.background = "#387804";
      box.style.position = "relative";
      box.style.top = "50px";
      boxMin = createBox(boxMax,'boxMin');
      boxMin.classList.toggle('black');
      boxMin.style.background = "#000000";
      boxMin.style.position = "absolute";
      boxMin.style.top = "0";
    }
  }
});

function createBox(divParent, nameBox){
  var divChild = document.createElement('div');
  divChild.setAttribute('class',nameBox);
  divParent.appendChild(divChild);
  return divChild;
}
