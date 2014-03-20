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
	var next = index + 1, nextNext = index + 2;
	if(array[nextNext] == '/') {
		return 20;
	} else if (array[next] != undefined && array[nextNext] != undefined){
		return 10 + rollValue(array[next]) + rollValue(array[nextNext]);
	}
	return 0;
}

function handleSpare(array, index) {
	var score;
	return score;
}