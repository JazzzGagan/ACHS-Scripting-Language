/* arr = [2, 5, 0, 0, 7, 5, 0, 1, 3, 0];
duplicate_arr = [];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      if (duplicate_arr.indexOf(arr[i]) == "-1") duplicate_arr.push(arr[i]);
    }
  }
}
console.log(...duplicate_arr); */

/* arr = [2, 5, 0, 0, 7, 5, 0, 1, 3, 0];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    ++count;
  }
}

console.log(count);
 */

/* let arr = [2, 4, 5, 8, 8, 9, 2, 4];
duplicate_arr = [];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      if (duplicate_arr.indexOf(arr[i]) == "-1") {
        duplicate_arr.push(arr[i]);
      }
    }
  }
}
console.log(...duplicate_arr); */

/* let arr = [0, 5, 0, 0, 7, 5, 0, 1, 3, 0];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    ++count;
  }
}
console.log(count); */

function oddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else return "odd";
}
let num;
console.log(oddEven(5));
