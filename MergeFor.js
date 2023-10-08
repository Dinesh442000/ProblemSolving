let nums1 = [2, 5, 3, 4, 8];
let i = nums1.length,
  k = 0;
let res = [];

while (k <= nums1.length - 1) {
  res[k++] = nums1[--i];
}

console.log(res);
