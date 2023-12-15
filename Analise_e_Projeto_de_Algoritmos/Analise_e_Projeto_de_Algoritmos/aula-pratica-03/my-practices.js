"use strict";
function swap(arr, p1, p2) {
  let temp = arr[p1];
  arr[p1] = arr[p2];
  arr[p2] = temp;
}

function quickSortHoare(arr, i, j) {
  if (i < j) {
    // let l = i;
    // let p = j;
    // let r = j - 1;
    // // console.log("L: ", l, " R: ", r);
    // while (l <= r) {
    //   while (l <= r && arr[l] < arr[p]) {
    //     l++;
    //   }
    //   while (l <= r && arr[r] > arr[p]) {
    //     r--;
    //   }

    //   if (l <= r) {
    //     swap(arr, l, r);
    //     l++;
    //     r--;
    //   }
    // }
    // swap(arr, l, p);
    hoarePartition(arr, i, j);
    quickSortHoare(arr, i, l - 1);
    quickSortHoare(arr, l + 1, j);
  }
  return arr;
}

function hoarePartition(arr, i, j) {
  if (i < j) {
    let l = i;
    let p = j;
    let r = j - 1;

    // console.log("L: ", l, " R: ", r);
    while (l <= r) {
      while (l <= r && arr[l] < arr[p]) {
        l++;
      }
      while (l <= r && arr[r] > arr[p]) {
        r--;
      }

      if (l <= r) {
        swap(arr, l, r);
        l++;
        r--;
      }
    }
    swap(arr, l, p);
  }
}

function pivotHoarePartition(arr, i, j) {
  //console.log("Array: ", arr);
  //console.log("I: ", i, "J: ", j);
  let pivot = arr[Math.floor((i + j) / 2)];
  i--;
  j++;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }
    swap(arr, i, j);
  }
}

function quickSortPivotHoare(arr, i, j) {
  if (i < j) {
    let pivotIndex = pivotHoarePartition(arr, i, j);
    quickSortPivotHoare(arr, i, pivotIndex);
    quickSortPivotHoare(arr, pivotIndex + 1, j);
  }

  return arr;
}

function lomutoPartition(arr, i, j) {
  let p = arr[i];
  let s = i;
  let l = i;

  for (let k = i + 1; k < arr.length; k++) {
    if (arr[k] < p) {
      s++;
      swap(arr, s, k);
    }
  }
  swap(arr, s, l);

  return s;
}
// Função para gerar um array aleatório de tamanho n
function generateRandomArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * 100)); // Números aleatórios entre 0 e 1
  }
  return arr;
}

let arr = [26, 96, 99, 3, 87, 72, 4, 15, 8, 100]; //generateRandomArray(10);
console.log("Original Array: ", arr);
console.log("Lomuto result: ", lomutoPartition(arr, 0, 9));
console.log(
  "QuickSort with Hoare's Partition: ",
  quickSortPivotHoare(arr, 0, 9)
);
// console.log("Sorted Array with Hoare's Partition: ", quickSortHoare(arr, 0, 9));
