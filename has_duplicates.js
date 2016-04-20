var has_duplicates = function(array) {
	var i, j , seen;
	seen = {};
	for (i = 0; i < array.length; i++) {
		if (seen[array[i]]) return true;
		seen[array[i]] = true
	}
	return false;
}
