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
	var score = 0, temp;
	var shotArray = series.toString().split('');

	for (i = 0; i < shotArray.length - 1; i++) {
		if (shotArray[i] == 'X') {
			temp = handleStrike(shotArray, i);
			if (temp) {
				score += temp;
			} else {
				break;
			}
		} else if (shotArray[i] == '/'){
			temp = handleSpare(shotArray, i);
			if (temp) {
				score += temp;
			} else {
				break;
			}
		} else {
			score += rollValue(shotArray[i]);
		}
	}
	return score;
}

function handleStrike(array, index) {
	var next = index + 1, nextNext = index + 2;
	if (array[nextNext] == '/') {
		return 20;
	} else if (array[next] != undefined && array[nextNext] != undefined){
		return 10 + rollValue(array[next]) + rollValue(array[nextNext]);
	}
	return 0;
}

function handleSpare(array, index) {
	var previous = index - 1, next = index + 1;
	if (array[next] != undefined) {
		return 10 + rollValue(array[next]) - rollValue(array[previous]);
	} 
	return 0;
}