// const returnTotalSum = (...args) => {
// 	let sum = 0;

// 	for (let i = 0; i < arguments.length; i++) {
// 		sum += args[i];
// 	}

// 	return sum;
// };

// console.log(returnTotalSum(3, 34, 3, 42, 23, '23432', true));

// Higher Order Function

const higherOrder = (callback, value) => {
    const result = callback(value);
    
    if (typeof result === 'number') {
      console.log(`This is the output ${result}`);
    } else {
      console.error(`An error occurred: Invalid result`);
    }
  };
  
  const square = (n) => {
    if (typeof n !== 'number') {
      throw new Error('Input must be a number');
    }
    return n * n;
  };
  
  higherOrder(square, 5); // Outputs: This is the output 25
  