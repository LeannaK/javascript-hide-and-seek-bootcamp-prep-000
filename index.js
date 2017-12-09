function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  /*return document.getElementById('nested').getElementsByClassName("target")[0]*/
  /*return document.getElementById('nested').querySelector('div.target')*/
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  /*const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')*/
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n ).toString()
  }

  /*
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }*/
}

function deepestChild(){
  var node = document.getElementById('grand-node')

  /*
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  */

  while (node.querySelector('div')){
    node = node.querySelector('div')
  }
  return node
}
