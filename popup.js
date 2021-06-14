// //----------------------
console.log("popup.js");


let before = document.getElementById('before');
let after = document.getElementById('after');
before.oninput = inputText;
function inputText(e){
  after.innerHTML = e.target.value.replace(/\n/g, '<br>');
}

// コピー用関数
function copy() {
  let range = document.createRange();
  var copyTarget = document.getElementById("after");// コピー対象の要素を取得
  range.selectNodeContents(copyTarget);
  let selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
}
document.getElementById("after").addEventListener("click", copy);