var min = 9999999;
var max = 99999999;
var run;
var myString;
var myArray;
var flag;

function checkRandGen () {
	run = Math.floor(Math.random() * (max - min) + min);
	myString = run.toString();
	myArray = myString.split("");
	flag = true;
	for (i = 0; i < myArray.length; i++) {
		for (j = i + 1; j < myArray.length; j++) {
			if (myArray[i] == myArray[j]) {
				checkRandGen();
				flag = false;
			}
		}
	}
	if (flag) {
		console.log(run);
	}
}

checkRandGen();
