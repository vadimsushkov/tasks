const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce( function (total, value) { 
	return total + value
}, 0);

console.log(sum); // 21