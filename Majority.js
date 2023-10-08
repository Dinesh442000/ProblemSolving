let nums = [8, 8, 0, 1, 8];
// let res = new Map();
// nums.forEach((i) => {
//   if (res.values(i)) {
//     console.log("present");
//   } else {
//     res.push(i);
//   }
// });
// console.log(res);
let cnt = 0;
let ele = 0;
for (let i = 0; i < nums.length; i++) {
  if (cnt == 0) {
    cnt = 1;
    ele = nums[i];
  } else if (nums[i] == ele) {
    cnt++;
  } else {
    cnt--;
  }
}
let cnt1 = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == ele) {
    cnt1++;
  }
  if (cnt1 > nums.length / 2) {
    console.log(ele);
  }
}
