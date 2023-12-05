"use strict";

function linearSearch(list, key) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == key) {
      return true;
    }
  }

  return false;
}

function sentinelLinearSearch(list, key) {
  list.push(key);
  let i = 0;

  while (list[i] != key) {
    i++;
  }

  if (i == list.length - 1) {
    return false;
  }

  return true;
}

const stringMatching = (p, t) => {
  for (let i = 0; i < t.length - (p.length - 1); i++) {
    let matchLen = 0;
    let startMatch = i;

    for (let j = 0; j < p.length; j++) {
      if (p[j] == t[i + j]) {
        matchLen++;
      } else {
        break;
      }
    }
    if (matchLen == p.length) {
      return startMatch;
    }
  }

  return -1;
};

function buildRandomList(size, maxIncluded) {
  let list = [];
  for (let i = 0; i < size; i++) {
    list.push(Math.round(Math.random() * maxIncluded));
  }

  return list;
}

let list = buildRandomList(10, 50);

console.log("List: ", list);

console.log("Linear Search 7: ", linearSearch(list, 7));
console.log("Sentinel Linear Search 7: ", sentinelLinearSearch(list, 7));
console.log(
  "String Match o in Alexsandro: ",
  stringMatching("exs", "Alexsandro")
);
