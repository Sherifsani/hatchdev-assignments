const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];

    while (i > 0 && arr[i - 1] > value) {
      arr[i] = arr[i - 1];
      i -= 1;
    }
    arr[i] = value;
  }
  return arr;
};

console.log(insertionSort([5, 4, 7, 9, 10, 3, 2, 1, 6, 8]));
