"use strict";

function buildRandomList(size, maxIncluded) {
  let list = [];
  for (let i = 0; i < size; i++) {
    list.push(Math.round(Math.random() * maxIncluded));
  }

  return list;
}

const swap = (list, p1, p2) => {
  let temp = list[p1];
  list[p1] = list[p2];
  list[p2] = temp;
};

function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j;
      }
    }
    swap(list, i, minIndex);
  }

  return list;
}

function decreasingSelectionSort(list) {
  for (let i = list.length - 1; i > 0; i--) {
    let minIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (list[minIndex] < list[j]) {
        minIndex = j;
      }
    }
    swap(list, i, minIndex);
  }

  return list;
}

function bubbleSort(list) {
  for (let i = list.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (list[j + 1] < list[j]) {
        swap(list, j + 1, j);
      }
    }
  }

  return list;
}

let list = buildRandomList(10, 30);

console.log("Original List: ", list);

console.log("Selection Sort: ", selectionSort(list));

console.log("Decreasing Selection Sort: ", decreasingSelectionSort(list));

console.log("Bubble Sort: ", bubbleSort(list));
