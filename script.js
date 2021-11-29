function displayNextImage() {
	x = (x === images.length - 1) ? 0 : x + 1;
	document.getElementById("img").src = images[x];
}
function displayPreviousImage() {
	x = (x <= 0) ? images.length - 1 : x - 1;
	document.getElementById("img").src = images[x];	  
}
function run() {
	document.getElementById("img").style.width = '400px';
	document.getElementById("img").style.height = 'auto';
	interval = setInterval(displayNextImage, 90);
}
function stop(){
	clearInterval(interval);
	interval = null;
}
var images = [], x = -1;
images[0] = "fish2.svg";
images[1] = "fish3.svg";
images[2] = "fish4.svg";
images[3] = "fish5.svg";
images[4] = "fish6.svg";
