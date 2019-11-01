showMsg = () => {
  var userInput = document.getElementById('js--input').value;
  document.getElementById('js--text').innerHTML = userInput;
}

makeBlack = () => {
  var oldHTML = document.getElementById('js--text').innerHTML;
  var newHTML = "<span style='color:#000'>" + oldHTML + "</span>";
  document.getElementById('js--text').innerHTML = newHTML;
}
