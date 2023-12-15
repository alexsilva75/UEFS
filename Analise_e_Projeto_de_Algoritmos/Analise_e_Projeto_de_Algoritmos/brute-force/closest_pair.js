"use strict";

function buildRandomPairList(size, maxValue) {
  let list = [];
  for (let i = 0; i < size; i++) {
    let pair = [];
    for (let j = 0; j < 2; j++) {
      pair.push(Math.floor(Math.random() * maxValue));
    }
    list.push(pair);
  }

  return list;
}

function closestPair(list) {
  let d = Number.MAX_SAFE_INTEGER;
  let result = [];
  for (let i = 0; i < list.length - 1; i++) {
    let pair1 = list[i];
    for (let j = i + 1; j < list.length; j++) {
      let pair2 = list[j];

      let catetsSqrSum =
        (pair1[0] - pair2[0]) ** 2 + (pair1[1] - pair2[1]) ** 2;
      // console.log("Catets square sum: ", catetsSqrSum);
      let tempD = Math.sqrt(catetsSqrSum);
      if (tempD < d) {
        result = [];
        d = tempD;
        result.push(pair1);
        result.push(pair2);
        console.log("Smaller distance: ", d, "Closest Pair: ", result);
      }
    }
  }
  return result;
}

let list = buildRandomPairList(10, 20);
console.log("Pair List: ", list);
console.log("Final Closest Pair: ", closestPair(list));
