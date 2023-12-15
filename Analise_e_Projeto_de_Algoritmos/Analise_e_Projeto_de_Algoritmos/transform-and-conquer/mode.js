"use strict";

function mode(arr) {
  arr = arr.sort((a, b) => a - b);
  let i = 0;
  let modeFrequency = 0;
  let modeValue = arr[i];

  while (i <= n - 1) {
    let runLength = 0;
    let runValue = arr[i];
    while (i + runLength <= arr.length - 1 && arr[i + runLength] == runValue) {
      runLength++;
    }
    if (runLength > modeFrequency) {
      modeFrequency = runLength;
      modeValue = runValue;
    }
  }
  return modeValue;
}
