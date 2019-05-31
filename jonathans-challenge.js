// Create a
// function that takes three arguments(x, y, z) and returns an array containing subarrays(e.g. [
// 	[],
// 	[],
// 	[]
// ]), each of a certain number of items, all set to either a string or an integer.

// x: Number of subarrays contained within the main array. Array(x)
// y: Number of items contained within each subarray(s). 
// z: Item contained within each subarray(s). .fill()

// Examples:
// 	matrix(3, 2, 3) //[[3, 3], [3, 3], [3, 3]]

// matrix(2, 1, "node.js") //[["node.js"], ["node.js"]]

// matrix(3, 2, 0) //[[0, 0], [0, 0], [0, 0]]

// Notes:
// 	-The first two arguments will always be valid integers. -
// 	The third is either a string or an integer.


function matrix(x, y, z){
	var items = Array(y).fill(z);
	var quantity = Array(x).fill(items);
	return quantity;
}

console.log(matrix(5, 2, "24"));