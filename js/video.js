var video = document.querySelector("#player1");
var volSlider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//play video
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	// update volume
	document.querySelector("#volume").innerHTML = ''+volSlider.value+'%';
});


//pause
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});


//var stores the current playback rate'
var vidRate = video.playbackRate;

// slow down
document.querySelector("#slower").addEventListener("click", function () {
	//console.log("Slow Video");
	
	//console.log(vidRate);

	vidRate = vidRate - (vidRate * .05);

	video.playbackRate = vidRate;
	console.log('New speed is ' + video.playbackRate + '');
});

// speed up 
document.querySelector("#faster").addEventListener("click", function () {
	//console.log("Speed Up Video");
	//console.log(vidRate);

	vidRate = vidRate + (vidRate * .05);

	video.playbackRate = vidRate;
	console.log('New speed is ' + video.playbackRate + '');
});

// skip ahead 

document.querySelector("#skip").addEventListener("click", function () {
	//console.log("Skip Ahead");
	// store the entire length of the video
	var vidLength = video.duration;
	//console.log(vidLength);

	// return and store current time 
	var vidTime = video.currentTime;
	//console.log(vidTime);
	console.log('Original location ' + video.currentTime + '')

	// add 15 sec to this
	var newTime = vidTime + 15;
	//console.log(newTime);

	// if the number is greater than the video duration set the current to 0 
	if (newTime >= vidLength) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log('New location '+video.currentTime+'');
});

// mute 
document.querySelector("#mute").addEventListener("click", function () {
	// checks if the volume is mute
	var isMuted = video.muted;
	//console.log(isMuted);

	// if true
	if (isMuted == true) {
		//sets volume value to 0 
		video.muted = false;
		//uses innerHTML to change the text in the button
		document.querySelector("#mute").innerHTML = "Mute";
		//console.log(isMuted);
	}
	// if false
	if (isMuted == false) {
		//sets volume to unmute 
		video.muted = true;
		//uses innerHTML to change the text in the button
		document.querySelector("#mute").innerHTML = "Unmute";
		//console.log(isMuted);
	}

});

// volume control
//var volSlider = document.querySelector("#slider");

volSlider.addEventListener("click", function () {

	var output = volSlider.value;
	//console.log(output);
	//console.log(video.volume);

	video.volume = output / 100;

	console.log(video.volume);

	document.querySelector("#volume").innerHTML = ''+output+'%';

});


document.querySelector("#vintage").addEventListener("click", function () {
	//console.log("old school button");


	document.querySelector("#player1").className = "oldSchool";
})

document.querySelector("#orig").addEventListener("click", function () {
	//console.log("original button");

	document.querySelector("#player1").className = "video";
})
