/*
	JavaScript/ECMAScript file for webpage
	Hian Neiva 2016
*/

function reveal(divID){
	
	var divs = [document.getElementById("about"), document.getElementById("professional"), document.getElementById("others")];
	
	for(var i=0; i< divs.length; i++){
		divs[i].className = "schrodingerDead";
	}
	
	divs[divID].className = "schrodingerAlive";
	
}

function altBG(BGid){
	
	if(BGid < 1){
			document.body.style.backgroundColor = "teal";
			document.getElementById("sideMenu").style.backgroundColor = "#006060";
			document.getElementById("fixedText").style.display = "block";
	}
	if(BGid == 1){
		document.body.style.backgroundColor = "#8B008B";
		document.getElementById("sideMenu").style.backgroundColor = "#710071";
		document.getElementById("fixedText").style.display = "none";
	}
	if(BGid > 1){
		document.body.style.backgroundColor = "#D58E00";
		document.getElementById("sideMenu").style.backgroundColor = "#AE7400";
		document.getElementById("fixedText").style.display = "none";
	}
}
