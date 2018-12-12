
function getFirstSelector(selector) {
  var x = document.querySelector(selector);
  console.log(x);
  return x
}


function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  var i = 0
  for(i=0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+ n;
  }
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}
