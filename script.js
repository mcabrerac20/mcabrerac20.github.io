var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var body2 = document.getElementById("newgradient");



function myFunction() {
	var w = window.open("index2.html");
	w.document.body.style.backgroundColor = "black"; 
	
	}


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

	}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);