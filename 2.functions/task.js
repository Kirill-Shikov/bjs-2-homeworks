function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if (current < min) {
			min = current;
		}
		if (current > max) {
			max = current;
		}

		sum += current;
	}

	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];

		if (current % 2 === 0) {
			sumEvenElement += current;
		} else {
			sumOddElement += current;
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];

		if (current % 2 === 0) {
			sumEvenElement += current;
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	const average = Number((sumEvenElement / countEvenElement).toFixed(2));
	return average;
}

function makeWork(arrOfArr, func) {
	let maxResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const currentResult = func(...arrOfArr[i]);

		if (currentResult > maxResult) {
			maxResult = currentResult;
		}
	}

	return maxResult;
}