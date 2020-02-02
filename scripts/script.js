
let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc==='image/psyduck.gif') {
		myImage.setAttribute('src', 'image/psyduck-1.gif');
	}else {
		myImage.setAttribute('src', 'image/psyduck.gif');
	}
};