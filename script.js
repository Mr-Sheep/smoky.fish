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
images[0] = "https://raw.githubusercontent.com/Mr-Sheep/smoky.fish/master/assets/fish2.svg";
images[1] = "https://raw.githubusercontent.com/Mr-Sheep/smoky.fish/master/assets/fish3.svg";
images[2] = "https://raw.githubusercontent.com/Mr-Sheep/smoky.fish/master/assets/fish4.svg";
images[3] = "https://raw.githubusercontent.com/Mr-Sheep/smoky.fish/master/assets/fish5.svg";
images[4] = "https://raw.githubusercontent.com/Mr-Sheep/smoky.fish/master/assets/fish6.svg";
