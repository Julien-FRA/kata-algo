export const removeElement = (nums: any, val: number): number => {
  let k: number = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log("k ", nums[k]);

    console.log("i ", nums[i]);
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};