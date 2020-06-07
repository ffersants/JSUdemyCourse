var select = document.getElementById("select");

var start = document.getElementById("start")

start.onclick = () => {
var level = select.options[select.selectedIndex].text;
console.log(level)
}

