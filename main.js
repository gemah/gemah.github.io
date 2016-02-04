/*
	JavaScript/ECMAScript file for webpage
	Hian Neiva 2016
*/

function reveal(divID){
	
	var divs = [document.getElementById("about"), document.getElementById("professional"), document.getElementById("others"), document.getElementById("contact")];
	
	for(var i=0; i< divs.length; i++){
		divs[i].className = "schrodingerDead";
	}
	
	divs[divID].className = "schrodingerAlive";
	
}
