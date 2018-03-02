// Learn Bubble Sort Algorithm

function sortBubble(arr) {
    let i=1;
    let swapped = true;

    while (swapped) {
      swapped = false;
      for (i; i<arr.length; i++) {
          if (arr[i-1] > arr[i]) {
              let temp = arr[i-1];
              arr[i-1] = arr[i];
              arr [i] = temp;
              swapped = true;
          }
      }
    }

    return arr;
}

console.log(sortBubble([4,1,5,7,9]));
