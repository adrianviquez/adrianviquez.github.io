$(document).ready(function()
{	
	window.onscroll = function() {applyNavbarPosition()};
})


function applyNavbarPosition() {
	let navbar = document.getElementById("navbar");
	let overlay = document.getElementById("overlay");

	let sticky = overlay.offsetTop + 48;

	console.log(sticky)

	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		console.log("Sticky");
	} else {
		navbar.classList.remove("sticky");
		console.log("Not Sticky");
	}
}