const firstQuestion = () => {
	// Define array limit
	let limit = 20;
	// Create empty array
	const arr = [];
	// Push until complete the limit with even numbers
	for (var i = 2; i <= limit; i += 2) {
		arr.push(i);
	}
	console.log(arr);
};

const secondQuestion = () => {
	// Create array with Y positions
	const y = Array.from("12345");
	// Push X cells with coordinates to create matrix
	const arr = y.map((x) => y.map((i) => x + "," + i));
	console.table(arr);
};

const thirdQuestion = (e) => {
	e.preventDefault();

	// Define matrix Y long
	let y = 3;

	// Get input value
	let val = e.target[0].value;

	// Validate input length
	if (val.length === y) {
		// Split val to get each number separately
		const paint = val.split("");
		// Creates empty 10 * y matrix
		const arr = [...Array(y).fill("")].map(() => [...Array(10).fill("")]);
		// Loops on prompt length as Y positions
		for (var i = 0; i < paint.length; i++) {
			// Loops X times with the given prompt character
			for (var idx = 0; idx < paint[i]; idx++) {
				// Changes cell value to *
				arr[i][idx] = "*";
			}
		}
		console.table(arr);
	} else {
		// Prompt length requeriment alert
		alert("Prompt length must be exactly " + y);
	}
};
