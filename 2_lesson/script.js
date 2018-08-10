// **********************
// ***** JAVASCRIPT *****
// This is where we can start writing our code.


// Baby - Justin Bieber 

// And I was like baby, baby, baby oh
// Like baby, baby, baby no
// Like baby, baby, baby oh
// I thought you'd always be mine (mine)
// Baby, baby, baby oh
// Like baby, baby, baby no
// Like baby, baby, baby oh
// I thought you'd always be mine

var flag = false;

function baby(start, end){
	console.log(start + "baby, baby, baby " + end);
}

function generatePhrase(){
	if (flag === false) {
		baby("And I was like ", "oh");
		flag = true;
	} else {
		baby("", "oh");
	}
	baby("Like ", "no");
	baby("Like ", "oh");
}

function playSong(){
	generatePhrase();
	console.log("I thought you'd always be mine (mine)")
	generatePhrase();
}


playSong();

