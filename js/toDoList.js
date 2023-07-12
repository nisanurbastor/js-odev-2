
//Create close button
var myList = document.getElementsByTagName("li")

for(let i; i<myList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Create new list item
function newElement(){
    var li = document.createElement("li")
    const inputValue = document.getElementById("task").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)

    if(inputValue){
        document.getElementById("list").appendChild(li)
        document.getElementById("task").value = ""
        $('.success').toast('show')
    }else
    $('.error').toast('show');
}

var span = document.createElement("SPAN")
  var txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt);
  li.appendChild(span)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}