// First exercise

const number = -1;

if (number >= 0) {
	console.log('This is number positive')
} else {
	console.log('This is number negative')
}

// Second exercise
let n = 50;
let sum = 0;
for (let i = 0; i <= n; i++){
	if (i % 5 == 0){
		sum +=i
	}
}

console.log("Summa = ",sum)

// thirt exercise

let arr = [254, 115, 78, 25, 91, 45, 37];
let new_arr = [];
for (i=0; i < arr.length; i++){
	if (arr[i] > 50){
		new_arr = new_arr.concat(arr[i])
	}
}
console.log(new_arr);