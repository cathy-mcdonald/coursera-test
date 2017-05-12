// Create a byeSpeaker.speak function in the global scope

(function (window) {
	var byeSpeaker = {};
	
	var speakWord = "Good Bye";
	
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	};
	
	window.byeSpeaker = byeSpeaker;
})(window);
