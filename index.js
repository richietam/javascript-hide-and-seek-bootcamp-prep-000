
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
  var lis = document.getElementById("grand-node").querySelectorAll("div");
  var test;
  var i = 0;
  for(i=0; i < lis.length-1; i++) {
    test = lis[i].querySelector("div");
    return test;
  }
}
