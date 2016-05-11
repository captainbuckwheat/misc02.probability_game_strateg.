var factorial = function(x) { // for positive numbers above zero. 
	var i, fact; 
	fact = 1;
	for (i = 2; i <= x; i++) fact*=i; 
	return fact; 
}
