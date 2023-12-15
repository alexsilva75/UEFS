"use strict";

function uniqueElements(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] == list[j]) {
        // console.log("list[i]: ", list[i], "==", "list[j]", list[j]);
        return false;
      }
    }
  }

  return true;
}

const numericCompare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};

function preSortUniqueElements(list) {
  list = list.sort(numericCompare);

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] == list[i + 1]) {
      return false;
    }
  }

  return true;
}

function hashUniqueElements(list) {
  let hash = {};

  for (let i = 0; i < list.length; i++) {
    if (`${list[i]}` in hash) {
      return false;
    }

    hash[`${list[i]}`] = list[i];
  }
  // console.log("Hash: ", hash);
  return true;
}

function buildRandomList(size, upperBound) {
  let list = [];
  for (let i = 0; i < size; i++) {
    list.push(Math.floor(Math.random() * upperBound));
  }

  return list;
}

let list = buildRandomList(5, 30);
console.log(list.sort(numericCompare));

console.log("Unique Elements: ", uniqueElements(list));
console.log("Pre-Sort Unique Elements: ", preSortUniqueElements(list));
console.log("Hash Unique Elements: ", hashUniqueElements(list));
