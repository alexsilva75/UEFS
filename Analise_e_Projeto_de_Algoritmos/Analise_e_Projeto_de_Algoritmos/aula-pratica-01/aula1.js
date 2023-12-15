const listSizes = [10, 100, 1000, 5000, 10000];
// const bruteForceTimes = [1, 2, 3];
// ATIVIDADE 3 //
// n^2
// function hasDuplicatesBruteforce(arr) {
//   var result = false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         result = true;
//       }
//     }
//   }
//   return result;
// }

// const bruteForceTimes = [];

// for (let size of listSizes) {
//   const testList = Array.from({ length: size }, () =>
//     Math.floor(Math.random() * size)
//   );

//   // Medir o tempo de execução para cada algoritmo
//   const bruteForceStart = performance.now();
//   hasDuplicatesBruteforce(testList);
//   const bruteForceEnd = performance.now();
//   bruteForceTimes.push(bruteForceEnd - bruteForceStart);
// }

// // Desenhar o gráfico
// const ctx = document.getElementById("myChart").getContext("2d");
// const myChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: listSizes,
//     datasets: [
//       {
//         label: "Força Bruta",
//         data: bruteForceTimes,
//         borderColor: "red",
//         borderWidth: 1,
//         fill: false,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       x: {
//         type: "linear",
//         position: "bottom",
//       },
//       y: {
//         type: "linear",
//         position: "left",
//       },
//     },
//   },
// });

// ATIVIDADE 4 //

// n^2
// function hasDuplicatesBruteforce(arr) {
//   var result = false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         result = true;
//       }
//     }
//   }
//   return result;
// }

// // n*log(n)
// function hasDuplicatesSort(arr) {
//   arr.sort();
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// // const listSizes = [10, 100, 1000, 10000];
// const bruteForceTimes = [];
// const sortTimes = [];

// for (let size of listSizes) {
//   const testList = Array.from({ length: size }, () =>
//     Math.floor(Math.random() * size)
//   );

//   // Medir o tempo de execução para cada algoritmo
//   const bruteForceStart = performance.now();
//   hasDuplicatesBruteforce(testList);
//   const bruteForceEnd = performance.now();
//   bruteForceTimes.push(bruteForceEnd - bruteForceStart);

//   const sortStart = performance.now();
//   hasDuplicatesSort(testList);
//   const sortEnd = performance.now();
//   sortTimes.push(sortEnd - sortStart);
// }

// // Desenhar o gráfico
// const ctx = document.getElementById("myChart").getContext("2d");
// const myChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: listSizes,
//     datasets: [
//       {
//         label: "Força Bruta",
//         data: bruteForceTimes,
//         borderColor: "red",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "n*log(n)",
//         data: sortTimes,
//         borderColor: "blue",
//         borderWidth: 1,
//         fill: false,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       x: {
//         type: "linear",
//         position: "bottom",
//       },
//       y: {
//         type: "linear",
//         position: "left",
//       },
//     },
//   },
// });

// ATIVIDADE 6 //
function swap(arr, p1, p2) {
  let tmp = arr[p1];
  arr[p1] = arr[p2];
  arr[p2] = tmp;
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
function hasDuplicatesSelectionSort(arr) {
  arr = selectionSort(arr);
  let result = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      result = true;
    }
  }

  return result;
}
// ATIVIDADE 5 //

// n^2
function hasDuplicatesBruteforce(arr) {
  var result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result = true;
      }
    }
  }
  return result;
}

// n*log(n)
function hasDuplicatesSort(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}

// n
function hasDuplicatesHashSet(arr) {
  let set = new Set();
  for (let element of arr) {
    if (set.has(element)) {
      return true;
    }
    set.add(element);
  }
  return false;
}

function hasDuplicatesHashSet2(arr) {
  const set = new Set(arr);
  return !(set.size === arr.length);
}

// const listSizes = [10, 100, 1000, 10000];
const bruteForceTimes = [];
const sortTimes = [];
const hashSetTimes = [];
const selectionSortTimes = [];

for (let size of listSizes) {
  const testList = Array.from({ length: size }, () =>
    Math.floor(Math.random() * size)
  );

  // Medir o tempo de execução para cada algoritmo
  const bruteForceStart = performance.now();
  hasDuplicatesBruteforce(testList);
  const bruteForceEnd = performance.now();
  bruteForceTimes.push(bruteForceEnd - bruteForceStart);

  const sortStart = performance.now();
  hasDuplicatesSort(testList);
  const sortEnd = performance.now();
  sortTimes.push(sortEnd - sortStart);

  const hashSetStart = performance.now();
  hasDuplicatesHashSet(testList);
  const hashSetEnd = performance.now();
  hashSetTimes.push(hashSetEnd - hashSetStart);

  const selectionSortStart = performance.now();
  hasDuplicatesSelectionSort(testList);
  const selectionSortEnd = performance.now();
  selectionSortTimes.push(selectionSortEnd - selectionSortStart);
  //   console.log("Selection Sort Times: ", selectionSortTimes);
}

// Desenhar o gráfico
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: listSizes,
    datasets: [
      {
        label: "Força Bruta",
        data: bruteForceTimes,
        borderColor: "red",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "n*log(n)",
        data: sortTimes,
        borderColor: "blue",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "n",
        data: hashSetTimes,
        borderColor: "green",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "n^2 * n",
        data: selectionSortTimes,
        borderColor: "rgba(192, 128, 92, 0.7)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  },
});

// Crie o gráfico
const ctx2 = document.getElementById("myChart2").getContext("2d");
const performanceChart = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: listSizes, //.map(String),
    datasets: [
      {
        label: "Brute Force",
        data: bruteForceTimes,
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "Sort",
        data: sortTimes,
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
      {
        label: "Hash Set",
        data: hashSetTimes,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Selection Sort",
        data: selectionSortTimes,
        backgroundColor: "rgba(192, 128, 92, 0.7)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
