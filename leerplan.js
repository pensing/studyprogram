function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
function save(week){
  localStorage.setItem(week, JSON.stringify(document.getElementById(week).innerHTML));
}

function load(){
  var i; 
  for (i=1;i<3;i++) {   
	week=JSON.parse(localStorage.getItem('week'+i));
	document.getElementById(week).innerHTML = week;
  }
}

function wis(){
    localStorage.clear()

}
