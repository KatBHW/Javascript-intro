//create variable to keep track of running total
var runningTotal = 0;

//create loop to iterate from 1 to 1000
for (var i = 0; i < 1001; i ++) {

//check whether number is a multiple of 3 or 5
		if ((i % 3 === 0) || (i % 5 === 0)) {

//add any multiples of 3 or 5 to running total
			 runningTotal +=i;
	}	
}

//print total when loop has finished
	console.log (runningTotal);