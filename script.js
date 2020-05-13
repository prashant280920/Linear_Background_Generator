var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var input = document.getElementById("direction");
var btun = document.querySelector("#button")
function setgradient(){
	body.style.background =
	 "linear-gradient("+input.value
	 +","
	 +color1.value
	 + ","
	 +color2.value
	 + ")";
	 css.innerHTML=body.style.background+";";

}
function addlistenerafterclick(){
	setgradient();
} 
function addlistenerafterkeypresss(event){
	if(event.keyCode===13){
		setgradient();
	}
}
btun.addEventListener('click',addlistenerafterclick);
input.addEventListener('keypress',addlistenerafterkeypresss)
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);