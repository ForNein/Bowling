function rollValue(value) {
	if (value == 'X' || value == '/') {
		return 10;
	}
	if (value != '-') {
		return parseInt(value);
	}
	return 0;
}

function calculateScore(series) {
	var score = 0;
	var shotArray = series.toString().split('');
	for (i = 0; i < shotArray.length - 1; i++) {
		if (shotArray[i] == 'X') {
			score += handleStrike(shotArray, i);
			if (shotArray[i+3] == undefined) { break; } 		
		} else if (shotArray[i] == '/'){
			score += handleSpare(shotArray, i);
			if (shotArray[i+2] == undefined) { break; }
		} else {
			score += rollValue(shotArray[i]);
		}
	}
	return score;
}

function handleStrike(array, index) {
	var next = index+1, nextNext = index+2;
	if (array[nextNext] == '/') {
		return 20;
	}
	return 10 + rollValue(array[next]) + rollValue(array[nextNext]);
}

function handleSpare(array, index) {
	var previous = index-1, next = index+1;
	return 10 + rollValue(array[next]) - rollValue(array[previous]);
}