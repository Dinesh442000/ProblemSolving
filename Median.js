let nums1 = [1, 5, 11, 1];
let nums2 = [3, 4, 9, 10, 24];
let nums3 = [];
let k = 0;
let i = 0;
let j = 0;

for (i = 0; i < nums1.length; ) {
  if (nums1[i] > nums2[j]) {
    nums3[k] = nums2[j];
    j++;
    k++;
    console.log(nums3);
  } else {
    nums3[k] = nums1[i];
    i++;
    k++;
    console.log(nums3);
  }
}

console.log(i, j, k);

while (i < nums1.length) {
  nums3[k++] = nums1[i++];
}
while (j < nums2.length) {
  nums3[k++] = nums1[j++];
}

console.log(nums3);
