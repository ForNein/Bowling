describe("Bowling Score Calculator", function() {
	it("value for current roll", function() {
		expect(rollValue('/')).toEqual(10);
		expect(rollValue('X')).toEqual(10);
		expect(rollValue('-')).toEqual(0);
		expect(rollValue('9')).toEqual(9);
		expect(rollValue('7')).toEqual(7);
		expect(rollValue('4')).toEqual(4);
		expect(rollValue('2')).toEqual(2);
		expect(rollValue('1')).toEqual(1);
	});

	it("full game test", function() {
		expect(calculateScore('XXXXXXXXXXXX')).toEqual(300);
		expect(calculateScore('9-9-9-9-9-9-9-9-9-9-')).toEqual(90);
		expect(calculateScore('5/5/5/5/5/5/5/5/5/5/5')).toEqual(150);
	});

	it("handle strike test", function() {
		expect(handleStrike(['X','X','X','X','X','X','X','X','X','X','X','X'], 0)).toEqual(30);
		expect(handleStrike(['X','X','X','X','X','X','X','X','X','X','X','X'], 3)).toEqual(30);
		expect(handleStrike(['X','X','X','X','X','X','X','X','X','X','X','X'], 6)).toEqual(30);
		expect(handleStrike(['X','X','X','X','X','X','X','X','X','X','X','X'], 9)).toEqual(30);
		expect(handleStrike(['X','X','X','X','X','X','X','X','X','X','X','X'], 10)).toEqual(0);
		expect(handleStrike(['X','X','X','X','X','X','X','X','X','X','X','X'], 11)).toEqual(0);
		expect(handleStrike(['X','8','/'], 0)).toEqual(20);
		expect(handleStrike(['X','8','1'], 0)).toEqual(19);
		expect(handleStrike(['X','7','-'], 0)).toEqual(17);
		expect(handleStrike(['X','-','4'], 0)).toEqual(14);
		expect(handleStrike(['X','-','-'], 0)).toEqual(10);
	});

	it("handle spare test", function() {
		expect(handleSpare(['8','/','X'], 1)).toEqual(12);
		expect(handleSpare(['5','/','X'], 1)).toEqual(15);
		expect(handleSpare(['2','/','X'], 1)).toEqual(18);
		expect(handleSpare(['-','/','X'], 1)).toEqual(20);
		expect(handleSpare(['8','/','8'], 1)).toEqual(10);
		expect(handleSpare(['4','/','5'], 1)).toEqual(11);
		expect(handleSpare(['7','/','2'], 1)).toEqual(5);
		expect(handleSpare(['8','/','-'], 1)).toEqual(2);
		expect(handleSpare(['5','/','-'], 1)).toEqual(5);
		expect(handleSpare(['2','/','-'], 1)).toEqual(8);
	});
});