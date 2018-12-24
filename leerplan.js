function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function save(){
  var cbArr = [];
  var c = document.getElementsByClassName("cb");
  var i;
  for (i = 0; i < c.length; i++) {
	cbArr.push(c[i].checked);
  }
  localStorage.setItem("cb", JSON.stringify(cbArr));
}

function load(){
  var c = document.getElementsByClassName("cb");
  var cbArr = [];
  cbArr= JSON.parse(localStorage.getItem("cb"));
  var i;
  for (i = 0; i < cbArr.length; i++) {
    item = cbArr[i];
	c[i].checked = cbArr[i];
  }
}

function wis(){
    localStorage.clear()

}
