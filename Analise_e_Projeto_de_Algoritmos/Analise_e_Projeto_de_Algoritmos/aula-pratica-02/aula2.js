const listSizes = [10, 100, 1000, 5000, 10000];
// const bruteForceTimes = [1, 2, 3];
// ATIVIDADE 3 - BRUTE FORCE //
// function findMedian(arr) {
//   // Obtém o comprimento do array
//   const length = arr.length;

//   // Calcula o índice alvo que representa o meio do array
//   const targetIndex = Math.floor(length / 2);

//   // Loop para encontrar o valor que está na posição do índice alvo
//   for (let i = 0; i < targetIndex; i++) {
//     // Encontra o índice do valor mínimo no array
//     const minIndex = arr.indexOf(Math.min(...arr));

//     // Remove o elemento mínimo do array
//     arr.splice(minIndex, 1);
//   }

//   // Retorna o valor na posição do índice alvo (mediana)
//   return arr[arr.indexOf(Math.min(...arr))];
// }

// const bruteForceTimes = [];

// for (let size of listSizes) {
//   const testList = Array.from({ length: size }, () =>
//     Math.floor(Math.random() * size)
//   );

//   // Medir o tempo de execução para cada algoritmo
//   const bruteForceStart = performance.now();
//   findMedian(testList);
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

// ATIVIDADE 4 - DIVIDE AND CONQUER //
// function findMedian(arr) {
//   // Obtém o comprimento do array
//   const length = arr.length;

//   // Calcula o índice alvo que representa o meio do array
//   const targetIndex = Math.floor(length / 2);

//   // Loop para encontrar o valor que está na posição do índice alvo
//   for (let i = 0; i < targetIndex; i++) {
//     // Encontra o índice do valor mínimo no array
//     const minIndex = arr.indexOf(Math.min(...arr));

//     // Remove o elemento mínimo do array
//     arr.splice(minIndex, 1);
//   }

//   // Retorna o valor na posição do índice alvo (mediana)
//   return arr[arr.indexOf(Math.min(...arr))];
// }

// function conquerDivideMedian(arr) {
//   // Cria uma cópia ordenada do array de forma crescente
//   const sortedArr = [...arr].sort((a, b) => a - b);

//   // Calcula o índice do meio do array
//   const middleIndex = Math.floor(sortedArr.length / 2);

//   // Verifica se o array tem um número par de elementos
//   if (sortedArr.length % 2 === 0) {
//     // Se for par, retorna a média dos dois valores do meio
//     return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
//   } else {
//     // Se for ímpar, retorna o valor do meio
//     return sortedArr[middleIndex];
//   }
// }

// //const listSizes = [10, 100, 1000, 10000];
// const bruteForceTimes = [];
// const conquerDivideTimes = [];

// for (let size of listSizes) {
//   const testList = Array.from({ length: size }, () =>
//     Math.floor(Math.random() * size)
//   );

//   // Medir o tempo de execução para cada algoritmo
//   const bruteForceStart = performance.now();
//   findMedian(testList);
//   const bruteForceEnd = performance.now();
//   bruteForceTimes.push(bruteForceEnd - bruteForceStart);

//   const conquerDivideStart = performance.now();
//   conquerDivideMedian(testList);
//   const conquerDivideEnd = performance.now();
//   conquerDivideTimes.push(conquerDivideEnd - conquerDivideStart);
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
//         label: "Div. & Conq.",
//         data: conquerDivideTimes,
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

// ATIVIDADE 5 - MERGE SORT //
// function findMedian(arr) {
//   // Obtém o comprimento do array
//   const length = arr.length;

//   // Calcula o índice alvo que representa o meio do array
//   const targetIndex = Math.floor(length / 2);

//   // Loop para encontrar o valor que está na posição do índice alvo
//   for (let i = 0; i < targetIndex; i++) {
//     // Encontra o índice do valor mínimo no array
//     const minIndex = arr.indexOf(Math.min(...arr));

//     // Remove o elemento mínimo do array
//     arr.splice(minIndex, 1);
//   }

//   // Retorna o valor na posição do índice alvo (mediana)
//   return arr[arr.indexOf(Math.min(...arr))];
// }

// function conquerDivideMedian(arr) {
//   // Cria uma cópia ordenada do array de forma crescente
//   const sortedArr = [...arr].sort((a, b) => a - b);

//   // Calcula o índice do meio do array
//   const middleIndex = Math.floor(sortedArr.length / 2);

//   // Verifica se o array tem um número par de elementos
//   if (sortedArr.length % 2 === 0) {
//     // Se for par, retorna a média dos dois valores do meio
//     return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
//   } else {
//     // Se for ímpar, retorna o valor do meio
//     return sortedArr[middleIndex];
//   }
// }

// // Função principal do Merge Sort
// function mergeSort(arr) {
//   // Caso base: retorna o array se tiver 1 elemento ou nenhum
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Divide o array ao meio
//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   // Combina os resultados das chamadas recursivas
//   return merge(mergeSort(left), mergeSort(right));
// }

// // Função auxiliar para mesclar dois arrays ordenados
// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Enquanto houver elementos em ambos os arrays
//   while (leftIndex < left.length && rightIndex < right.length) {
//     // Compara e adiciona o menor elemento ao resultado
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Adiciona os elementos restantes de ambos os arrays (se houver)
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// // Função que utiliza o Merge Sort para encontrar a mediana
// function conquerDivideMedianMergeSort(arr) {
//   const sortedArr = mergeSort(arr);
//   const middle = Math.floor(sortedArr.length / 2);

//   // Calcula e retorna a mediana com base no array ordenado
//   if (sortedArr.length % 2 === 0) {
//     return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
//   } else {
//     return sortedArr[middle];
//   }
// }

// //const listSizes = [10, 100, 1000, 10000];
// const bruteForceTimes = [];
// const conquerDivideTimes = [];
// const conquerDivideMergeTimes = [];

// for (let size of listSizes) {
//   const testList = Array.from({ length: size }, () =>
//     Math.floor(Math.random() * size)
//   );

//   // Medir o tempo de execução para cada algoritmo
//   const bruteForceStart = performance.now();
//   findMedian(testList);
//   const bruteForceEnd = performance.now();
//   bruteForceTimes.push(bruteForceEnd - bruteForceStart);

//   const conquerDivideStart = performance.now();
//   conquerDivideMedian(testList);
//   const conquerDivideEnd = performance.now();
//   conquerDivideTimes.push(conquerDivideEnd - conquerDivideStart);

//   const conquerDivideMergeStart = performance.now();
//   conquerDivideMedianMergeSort(testList);
//   const conquerDivideMergeEnd = performance.now();
//   conquerDivideMergeTimes.push(conquerDivideMergeEnd - conquerDivideMergeStart);
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
//         label: "Div. & Conq.",
//         data: conquerDivideTimes,
//         borderColor: "blue",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "MergeSort",
//         data: conquerDivideMergeTimes,
//         borderColor: "green",
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

// ATIVIDADE 6 - QUICK SELECT //
function findMedian(arr) {
  // Obtém o comprimento do array
  const length = arr.length;

  // Calcula o índice alvo que representa o meio do array
  const targetIndex = Math.floor(length / 2);

  // Loop para encontrar o valor que está na posição do índice alvo
  for (let i = 0; i < targetIndex; i++) {
    // Encontra o índice do valor mínimo no array
    const minIndex = arr.indexOf(Math.min(...arr));

    // Remove o elemento mínimo do array
    arr.splice(minIndex, 1);
  }

  // Retorna o valor na posição do índice alvo (mediana)
  return arr[arr.indexOf(Math.min(...arr))];
}

function conquerDivideMedian(arr) {
  // Cria uma cópia ordenada do array de forma crescente
  const sortedArr = [...arr].sort((a, b) => a - b);

  // Calcula o índice do meio do array
  const middleIndex = Math.floor(sortedArr.length / 2);

  // Verifica se o array tem um número par de elementos
  if (sortedArr.length % 2 === 0) {
    // Se for par, retorna a média dos dois valores do meio
    return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
  } else {
    // Se for ímpar, retorna o valor do meio
    return sortedArr[middleIndex];
  }
}

// Função principal do Merge Sort
function mergeSort(arr) {
  // Caso base: retorna o array se tiver 1 elemento ou nenhum
  if (arr.length <= 1) {
    return arr;
  }

  // Divide o array ao meio
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Combina os resultados das chamadas recursivas
  return merge(mergeSort(left), mergeSort(right));
}

// Função auxiliar para mesclar dois arrays ordenados
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Enquanto houver elementos em ambos os arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    // Compara e adiciona o menor elemento ao resultado
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Adiciona os elementos restantes de ambos os arrays (se houver)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Função que utiliza o Merge Sort para encontrar a mediana
function conquerDivideMedianMergeSort(arr) {
  const sortedArr = mergeSort(arr);
  const middle = Math.floor(sortedArr.length / 2);

  // Calcula e retorna a mediana com base no array ordenado
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
}

// Função para encontrar a mediana de uma matriz não ordenada
function findMedianQuickSelect(arr) {
  const n = arr.length;
  const k = Math.floor((n - 1) / 2); // Índice da mediana

  return quickSelect(arr, 0, n - 1, k);
}

// Algoritmo QuickSelect
function quickSelect(arr, left, right, k) {
  if (left === right) {
    return arr[left]; // Se há apenas um elemento, é a mediana
  }

  const pivotIndex = partition(arr, left, right); // Obtém o índice do pivô

  if (k === pivotIndex) {
    return arr[k]; // O pivô é a mediana
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k); // Busca na parte inferior
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k); // Busca na parte superior
  }
}

// Função de partição de Lomuto
function partition(arr, left, right) {
  const pivotIndex = choosePivot(left, right); // Escolhe o pivô
  const pivotValue = arr[pivotIndex];

  swap(arr, pivotIndex, right); // Move o pivô para o final do array

  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivotValue) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, right); // Move o pivô de volta para a posição correta

  return i; // Retorna o índice do pivô
}

// Escolhe o pivô como o elemento do meio
function choosePivot(left, right) {
  return Math.floor((left + right) / 2);
}

// Função para trocar elementos de posição em um array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// const listSizes = [10, 100, 1000, 10000];
const bruteForceTimes = [];
const conquerDivideTimes = [];
const conquerDivideMergeTimes = [];
const quickSelectTimes = [];

for (let size of listSizes) {
  const testList = Array.from({ length: size }, () =>
    Math.floor(Math.random() * size)
  );

  // Medir o tempo de execução para cada algoritmo
  const bruteForceStart = performance.now();
  findMedian(testList);
  const bruteForceEnd = performance.now();
  bruteForceTimes.push(bruteForceEnd - bruteForceStart);

  const conquerDivideStart = performance.now();
  conquerDivideMedian(testList);
  const conquerDivideEnd = performance.now();
  conquerDivideTimes.push(conquerDivideEnd - conquerDivideStart);

  const conquerDivideMergeStart = performance.now();
  conquerDivideMedianMergeSort(testList);
  const conquerDivideMergeEnd = performance.now();
  conquerDivideMergeTimes.push(conquerDivideMergeEnd - conquerDivideMergeStart);

  const quickSelectStart = performance.now();
  findMedianQuickSelect(testList);
  const quickSelectEnd = performance.now();
  quickSelectTimes.push(quickSelectEnd - quickSelectStart);
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
        label: "Div. & Conq.",
        data: conquerDivideTimes,
        borderColor: "blue",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "MergeSort",
        data: conquerDivideMergeTimes,
        borderColor: "green",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "QuickSelect",
        data: quickSelectTimes,
        borderColor: "orange",
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
