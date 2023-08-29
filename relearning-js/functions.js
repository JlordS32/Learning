// const returnTotalSum = (...args) => {
// 	let sum = 0;

// 	for (let i = 0; i < arguments.length; i++) {
// 		sum += args[i];
// 	}

// 	return sum;
// };

// console.log(returnTotalSum(3, 34, 3, 42, 23, '23432', true));

// Higher Order Function

const higherOrder = (square, value) => {
	console.log(`This is the output ${square(value)}`);
};

const square = (n) => {
	return n * n;
};

higherOrder(square, 5);