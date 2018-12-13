function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
function save(){
var selCheck = document.getElementById("werkplek");
localStorage.setItem("werkplek", selCheck.checked);
var selCheck = document.getElementById("ide");
localStorage.setItem("ide", selCheck.checked);
}

function load(){    
	var checked = JSON.parse(localStorage.getItem('werkplek'));
	document.getElementById("werkplek").checked = checked;
	var checked = JSON.parse(localStorage.getItem('ide'));
	document.getElementById("ide").checked = checked;
}
function wis(){
    location.reload();
    localStorage.clear()

}
