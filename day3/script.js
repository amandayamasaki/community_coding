// **********************
// ***** JAVASCRIPT *****
// This is where we can start writing our code.

var rituals_title = [
	"tea time",
	"meditate",
	"go cloud-watching",
	"help someone",
	"write out your thoughts"
]

var rituals_description = [
	"Put on the kettle, steep your favorite tea and savor it. Try it in the morning for a nice start to the day. Or have some before you start dinner.",
	"Just a few minutes of meditation can calm your mind and relieve stress. Meditative practice encourages you to focus on the present, rather than worry about the past or future.",
	"Lie on your back, relax, and watch the sky.",
	"Carry a bag, open a door, or pick up an extra carton of milk for a neighbor.",
	"Go for fifteen minutes on anything bothering you. Then let it go as you burn or bin the paper."
]

function getRitual(){
	var randomIndex = Math.floor(Math.random() * rituals_title.length); 
	document.getElementById("title").innerHTML = rituals_title[randomIndex]
	document.getElementById("description").innerHTML = rituals_description[randomIndex]
}