// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var closeButton = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  closeButton.className = "close";
  closeButton.appendChild(txt);
  myNodelist[i].appendChild(closeButton);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
console.log(close);
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

var form = document.querySelector(".form");
form.addEventListener("submit", addTodo);

// Create a new list item when clicking on the "Add" button
function addTodo(event) {
  event.preventDefault();
  var li = document.createElement("li");
  var inputValue = document.querySelector("#myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("list").appendChild(li);
  document.getElementById("myInput").value = "";


  // Create a "close" button and append it to each list item
  var button = document.createElement("button");
  var txt = document.createTextNode("X");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var parent = this.parentElement;
      parent.style.display = "none";
    };
  }

}
