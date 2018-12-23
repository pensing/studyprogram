//var cbArr = new boolean[37];
var cbArr = [];

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function childFunction() {
  var c = document.getElementById("week1").childNodes;
  var txt = "";
  var t = "";
  var i;
  for (i = 0; i < c.length; i++) {
    t = t + i;
	/*if (c[i].checked) {txt = txt + i " = checked<br>";} else {txt = txt + i " = not checked<br>";}*/
  }

  document.getElementById("nodes").innerHTML = t;
}

function cbFunction() {
  var c = document.getElementsByClassName("cb");
  var txt = "";
  var t = "";
  var i;
  for (i = 0; i < c.length; i++) {
    //t = t + i;
	//if (c[i].checked) {txt = txt + "checked<br>";} else {txt = txt + "not checked<br>";}
	cs = "";
	cs = c[i].checked;
	cbArr.push(cs);
  }
  //alert(cbArr);
}

//You must serialize non-string types before storing in localStorage.
function qsaSave() {
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var getmealpref = [];
for(var i=0, l=checkboxes.length; i<l;i++) {
    if(checkboxes[i].checked) {
        getmealpref[i] = checkboxes[i].value;
        localStorage.mealpref = JSON.stringify(getmealpref);
    }
}
}

// 
function gsaLoad() {
getmealpref = JSON.parse(localStorage.mealpref);
alert(getmealpref[0]);
}

function save(){
  alert('Deze functie is nog niet actief');
  save_test();
 }

function save_test(){
  cbFunction();
  //localStorage.setItem("cb", JSON.stringify(cbArr));
  localStorage.setItem("cb", cbArr);
  //alert(cbArr.length);
  //alert(JSON.stringify(cbArr));
  alert(cbArr);
}

function load(){
  var c = document.getElementsByClassName("cb");
  //alert('lengte='+c.length);
  var cbArr = [];
  cbArr= localStorage.getItem("cb");
  //alert("Loaded "+cbArr);
  var i;
  var t = "";
  //alert(cbArr);
  //for (i = 0; i < c.length; i++) {
  for (i = c.length; i >0 ; i--) {
    item = cbArr.pop();
	t = t + "," + i;
	alert("item="+item);
	//c[i].checked = item;
	//c[i].checked = cbArr[i];
	//c[i].checked = false;
  }
  alert(t);
}

function loadold(){
  var i; 
  for (i=1;i<3;i++) {   
	week=JSON.parse(localStorage.getItem('week'+i));
	document.getElementById(week).innerHTML = week;
  }
}

function wis(){
    localStorage.clear()

}
