let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
console.log(l1.reverse());
console.log(l2.reverse());
num1 = Number(l1.reverse().toString().split(",").join(""));
num2 = Number(l2.reverse().toString().split(",").join(""));
console.log(num1);
console.log(num2);
console.log(num1 + num2);
num3 = num1 + num2;
let res = [];
console.log(Math.trunc(2.333));
// res.push(num3 % 10);
while (num3 > 0) {
  res.push(num3 % 10);
  num3 = Math.trunc(num3 / 10);
}
console.log(res);
