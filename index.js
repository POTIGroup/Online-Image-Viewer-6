// 1366 x 768 / 16:9 / 11.6inch / 10.1inch x 5.7inch / 25.56cm x 14.47cm
// 297mm x 210mm / sprt(2):1
// 148.5mm x 105mm
// dpi 0.188
// 1579 x 1117 / 790 x 559

if (window.File) {
	document.getElementById("dropper").addEventListener("drop", onDrop, false);
}

if (!window.File) {
	alert("Sorry");
}

function onDrop(event) {
	var files = event.dataTransfer.files;

	for (var i = 0; i < files.length; i++) {
		var f = files[i];
		var fileReader = new FileReader();

		if (!f.type.match('image.*')) {
			alert("Sorry");
			continue;
		}

		if (f.type.match('image.*')) {
			fileReader.onload = function(e) {
				var path = e.target.result;
				Draw_(path);
			}
			fileReader.readAsDataURL(f);
			ChangeEditor();
		}
	}
	event.preventDefault();
}

function ChangeEditor() {
	var editor = document.getElementById("editor");
	var uploader = document.getElementById("uploader");

	editor.style.visibility = "visible";
	uploader.style.visibility = "hidden";
}

document.addEventListener('touchmove', function(event) {
	if (event.touches.length >= 2) {
		event.preventDefault();
	}
}, {
	passive: false
});

function Draw_(imagePath) {
	var canvas = document.createElement("canvas");
	var context = canvas.getContext('2d');
	var canvasHolder = document.getElementById ("canvasholder");

	const image = new Image();

	image.onload = function() {
		var canvasWidth = window.innerWidth;
		var canvasHeight = window.innerHeight;
		
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		
		canvas.style.width = "100vw";
		canvas.style.height = "100vh";
		canvas.style.position = "absolute";
		canvas.style.top = "0";
		
		context.drawImage (image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, canvasWidth, canvasHeight);
	}
	
	image.src = imagePath;
	canvasHolder.appendChild (canvas);
}

document.getElementById("full").addEventListener("click", fullScreen, false);
document.getElementById("full").addEventListener("click", windowScreen, false);

function fullScreen() {
	var screen = document.getElementById("canvasholder");
	screen.requestFullscreen();
}

function windowScreen() {
	document.exitFullscreen();
}

function rightButton() {
	var one;
	var two;
	var onClick;
	
	var right = getElementById ("right");
	var right_ = getElementById ("right_");

	rigth.addEventListener ("mousedown", function() {
		one = true;
		alert ("saf");
	}, false);
	
	rigth_.addEventListener ("mousedown", function() {
		two = true;
	}, false);
	
	right.addEventListener ("mouseup", function() {
		one = false;
	}, false);
	
	right_.addEventListener ("mouseup", function() {
		two = false;
	}, false);
	
	if (one && two) {
		alert("af");
	}
}