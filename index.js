function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  /*return document.getElementById('nested').getElementsByClassName("target")[0]*/
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n ).toString()
  }
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  while (node.querySelector('div')){
    node = node.querySelector('div')
  }
  return node
}
