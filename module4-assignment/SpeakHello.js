// Create a helloSpeaker.speak function in the global scope

(function (window) {
	var helloSpeaker = {};
	
	var speakWord = "Hello";
	
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	};
	
	window.helloSpeaker = helloSpeaker;
})(window);