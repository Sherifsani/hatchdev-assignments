const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let didSwap: boolean = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      didSwap = true;
    }

    if (!didSwap) {
      return arr;
    }
  }
  return arr;
};

console.log(bubbleSort([1, 5, 7, 3, 2, 8, 10, 6]));
