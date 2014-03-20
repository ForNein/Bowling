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
	return score;
}

function handleStrike(array, index) {
	var score = 10, next = index+1, nextNext = index+2;
	
	return score;
}

function handleSpare(array, index) {
	var score;
	return score;
}