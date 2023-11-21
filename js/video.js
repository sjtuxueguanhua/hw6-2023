var video;
video = document.querySelector("#player1");
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	volumeText.innerHTML = (video.volume * 100) + '%';
});

// Pause Button - Pause the video.
document.getElementById("pause").addEventListener("click", function () {
    video.pause();
});


// Slow Down
document.getElementById("slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New  Speed: " + video.playbackRate);
});

//Speed Up
document.getElementById("faster").addEventListener("click", function() {

	video.playbackRate /=0.9;
	video.playbackRate = parseFloat(video.playbackRate.toFixed(2));
	console.log("New  Speed: " + video.playbackRate);
});
// Skip Ahead 
document.getElementById("skip").addEventListener("click", function() {

	video.currentTime += 10;
    if (video.currentTime >= video.duration) {
		console.log("Video exceeds duration!");
		video.currentTime = 0;
    }
    console.log("Current video location: " + video.currentTime);
});

// Mute 
document.getElementById("mute").addEventListener("click", function() {

	video.muted = !video.muted;

	if (video.muted) {
        document.getElementById("mute").innerHTML = "Unmute";
		document.querySelector("#slider").value = 0;
		document.querySelector("#volume").innerText = 0;
    } else {
        document.getElementById("mute").innerHTML = "Mute";
		document.querySelector("#slider").value = document.querySelector("#volume").innerText;
		
    }
	
});


document.querySelector("#slider").addEventListener("input", function () {
	var volume = document.querySelector("#slider").value / 100;
    video.volume = volume;
    document.querySelector("#volume").innerText = Math.round(volume * 100) + "%";
});


document.getElementById('vintage').addEventListener('click', function() {
    
    video.classList.add('oldSchool');
	console.log("Add Old school style ");
});


document.getElementById('orig').addEventListener('click', function() {
    
    video.classList.remove('oldSchool')
	console.log("Old school style removed");
});