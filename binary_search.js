/* 
(asked by Josh on 5/25/2016)
Let f(high) be false and f(low) be true.
Then binary_search(low, high, f) returns an integer x in [low,high-1] such that f(x) is true and f(x+1) is false.
*/

var binary_search = function(low_num, high_num, f) {
	var i; 
	for (i = low_num; i <= high_num;) { 
		x = Math.round(i + (high_num - i)/2);
		if (f(x)) i = x;
		else { high_num = x;}
		if (high_num === i+1) return high_num-1; 
	}
}

var binary_search_test  = function() {
	var i, input, got, want, f, low, high;
	low = 10;
	high = 100;
	for (i = low; i < high; i++) {
		f = function(x) { return x <= i };	
		got = binary_search(low, high, f);
		want = i; 
		if (got !== want) {
			console.log("binary_search(" + i + "): got " + got + "; want " + want); 
			return;
		} 
	}
	console.log('it works like a fkn clock!'); 
}

/*
In example of question #1 the problem is in a form of:
  There exists such x that everything below it including x is true, everything above it is false, the function finds x; 
In example of question #2 the problem is in a form of:
   There exists such x that x is the correct answer to the problem;
In example of question #3 the problem is in a form of:
 binary_search does not find the LARGEST x such that f(x) is true. Use such function. 
*/


//question #1

/* What is the largest exact integer in javascript?
If you go to the javascript console and type 10+1, it'll print 11.
If you type 10-1, it'll print 9. Those answers are mathematically correct.

On the other hand, if you type 100000000000000000000+1, it'll print
100000000000000000000, and if you type 100000000000000000000-1, it'll
also print 100000000000000000000. Those answers are mathematically
incorrect. Javascript is treating 100000000000000000000 approximately,
not exactly. It uses that number to represent a range of numbers, not
just the one integer 100000000000000000000.

In JavaScript, let us call an integer x "exact" if (x - 1) + 1 === x and (x + 1) - 1 === x.
By this definition 10 is exact and 100000000000000000000 is not.
*/

var is_exact = function(x) {
	console.log(x + " " + (((x-1 < x) && (x+1 > x )) ? "Y" : "N"));
	a = x + 1; 
	b = x - 1; 
	return ((a - x === 1) && (x - b === 1 )); 
}

//question #2
//Find the largest integer that is less than or equal to square root of k. 

var k = 1000 // Example.
var f = function(x) {return x*x <= k}
binary_search(1, k, f)

// or for an approximation with two decimal places we can edit accordingly: 

var f = function(x) {return x*x <= 1000000}   
binary_search(1, 10000000, f)/100

//question #3
/*
Note. binary_search does not find the LARGEST x such that f(x) is true.
It just finds ANY x in the range [low, high] such that f(x) is true and f(x+1) is false.
For example, consider the function 
*/
var f = function(x) { return (x > 10 && x < 80) || x == 99 }

// We can see both f(79) and f(99) are true. But binary_search(1,100,f) will return 79. 
