// const listSizes = [10, 100, 1000, 5000, 10000];
// const bruteForceTimes = [1, 2, 3];

// Desenhar o gráfico
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

// ATIVIDADE 3 //
// Algoritmo MergeSort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Algoritmo QuickSort com Lomuto Partition
function quickSortLomuto(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partitionLomuto(arr, low, high);
    quickSortLomuto(arr, low, pivotIndex - 1);
    quickSortLomuto(arr, pivotIndex + 1, high);
  }
}

function partitionLomuto(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

// Algoritmo QuickSort com Hoare Partition
function quickSortHoare(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partitionHoare(arr, low, high);
    quickSortHoare(arr, low, pivotIndex);
    quickSortHoare(arr, pivotIndex + 1, high);
  }
}

function partitionHoare(arr, low, high) {
  const pivot = arr[Math.floor((low + high) / 2)];
  let i = low - 1;
  let j = high + 1;

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

// Função para trocar elementos de posição
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Função para gerar um array aleatório de tamanho n
function generateRandomArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.random()); // Números aleatórios entre 0 e 1
  }
  return arr;
}

// Função para medir o tempo de execução de um algoritmo de ordenação
function measureTime(sortFunction, arr) {
  const startTime = performance.now();
  sortFunction(arr);
  const endTime = performance.now();
  return endTime - startTime;
}

// Comparando o desempenho dos algoritmos
const listSizes = [10, 100, 1000, 10000, 100000];
const mergeSortTimes = [];
const quickSortLomutoTimes = [];
const quickSortHoareTimes = [];

for (let size of listSizes) {
  const arr = generateRandomArray(size);

  // Medir o tempo de execução para cada algoritmo
  const mergeSortTime = measureTime(mergeSort, [...arr]);
  console.log(`MergeSort - Size: ${size}, Time: ${mergeSortTime.toFixed(4)}ms`);
  mergeSortTimes.push(mergeSortTime);

  const quickSortLomutoTime = measureTime(quickSortLomuto, [...arr]);
  console.log(
    `QuickSort Lomuto - Size: ${size}, Time: ${quickSortLomutoTime.toFixed(
      4
    )}ms`
  );
  quickSortLomutoTimes.push(quickSortLomutoTime);

  const quickSortHoareTime = measureTime(quickSortHoare, [...arr]);
  console.log(
    `QuickSort Hoare - Size: ${size}, Time: ${quickSortHoareTime.toFixed(4)}ms`
  );
  quickSortHoareTimes.push(quickSortHoareTime);

  console.log("------");
}

// Desenhar o gráfico
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: listSizes,
    datasets: [
      {
        label: "MergeSort",
        data: mergeSortTimes,
        borderColor: "red",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "QuickSort Lomuto",
        data: quickSortLomutoTimes,
        borderColor: "blue",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "QuickSort Hoare",
        data: quickSortHoareTimes,
        borderColor: "green",
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

// ATIVIDADE 4 //
// Algoritmo HeapSort not in place
// class MyHeap {
//   constructor() {
//     this.heap = [];
//   }

//   parentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }

//   leftChildIndex(index) {
//     return 2 * index + 1;
//   }

//   rightChildIndex(index) {
//     return 2 * index + 2;
//   }

//   swap(a, b) {
//     let temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   }

//   insert(item) {
//     this.heap.push(item);
//     var index = this.heap.length - 1;
//     var parent = this.parentIndex(index);
//     while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
//       this.swap(parent, index);
//       index = this.parentIndex(index);
//       parent = this.parentIndex(index);
//     }
//   }

//   delete() {
//     // retira o primeiro elemento da heap
//     var item = this.heap.shift();
//     // recua a matriz da heap e adiciona no início da matriz o último elemento que foi desempilhado
//     this.heap.unshift(this.heap.pop());
//     // inicializa os índices inicial, filho esquerda e filho direita
//     var index = 0;
//     var leftChild = this.leftChildIndex(index);
//     var rightChild = this.rightChildIndex(index);
//     // enquanto houver filhos e um dos filhos tiver um valor maior do que o pai
//     while (
//       this.heap[leftChild] &&
//       (this.heap[leftChild] > this.heap[index] ||
//         this.heap[rightChild] > this.heap[index])
//     ) {
//       // determina qual dos filhos tem o maior valor
//       var max = leftChild;
//       if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max])
//         max = rightChild;
//       // substitui o valor do parente
//       this.swap(max, index);
//       // repete o processo para o filho que foi substituído
//       index = max;
//       leftChild = this.leftChildIndex(max);
//       rightChild = this.rightChildIndex(max);
//     }
//     return item;
//   }
// }

// function heapSortNotInPlace(arr) {
//   var sorted = [];
//   var heap = new MyHeap();
//   // Insere os elementos na heap
//   for (let i = 0; i < arr.length; i++) {
//     heap.insert(arr[i]);
//   }
//   // remove o primeiro elemento da heap e adiciona em uma lista que será ordenada por resultado
//   for (let i = 0; i < arr.length; i++) {
//     sorted.push(heap.delete());
//   }
//   return sorted;
// }

// // Algoritmo HeapSort in place
// function heapSortInPlace(arr) {
//   const n = arr.length;
//   // Construir heap máxima (transforma o array em uma heap)
//   // Começa no último nó do penúltimo nível e vai até a raiz
//   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     heapify(arr, n, i);
//   }

//   // Extrair elementos um por um da heap
//   for (let i = n - 1; i > 0; i--) {
//     // Mover a raiz (maior elemento) para o final
//     swap(arr, 0, i);
//     // Chamar heapify na heap reduzida
//     heapify(arr, i, 0);
//   }
// }

// // Função para construir heap máxima, sendo n o tamanho do array e i a posição do nó a ser avaliado
// function heapify(arr, n, i) {
//   let largest = i;
//   const left = 2 * i + 1;
//   const right = 2 * i + 2;
//   // Verifica se algum dos filhos é maior do que o pai
//   if (left < n && arr[left] > arr[largest]) {
//     largest = left;
//   }

//   if (right < n && arr[right] > arr[largest]) {
//     largest = right;
//   }
//   // caso um filho seja maior do que o pai
//   if (largest !== i) {
//     swap(arr, i, largest);
//     // aplica o heapify no nó filho de maior valor identificado
//     heapify(arr, n, largest);
//   }
// }

// // Função para trocar elementos de posição
// function swap(arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // Algoritmo CountingSort
// function countingSort(arr) {
//   const n = arr.length;

//   // Encontrar o valor máximo no array
//   let maxValue = arr[0];
//   for (let i = 1; i < n; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//     }
//   }

//   // Inicializar o array de contagem e o array ordenado
//   const count = new Array(maxValue + 1).fill(0);
//   const sortedArray = new Array(n);

//   // Contar a ocorrência de cada elemento
//   for (let i = 0; i < n; i++) {
//     count[arr[i]]++;
//   }

//   var z = 0;
//   for (let i = 0; i <= maxValue; i++) {
//     while (count[i]-- > 0) {
//       sortedArray[z++] = i;
//     }
//   }

//   return sortedArray;
// }

// // Algoritmo BucketSort
// function bucketSort(arr) {
//   // Encontrar o valor máximo e mínimo no array
//   let maxElement = arr[0];
//   let minElement = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//     if (arr[i] < minElement) {
//       minElement = arr[i];
//     }
//   }

//   var noOfBuckets = 100; //arr.length;

//   // Calculate range
//   const range = (maxElement - minElement) / noOfBuckets;

//   const temp = [];

//   // create n(noOfBuckets) empty buckets
//   for (let i = 0; i < noOfBuckets; i++) {
//     temp.push([]);
//   }

//   // Insert elements of arr in corresponding buckets
//   for (let i = 0; i < arr.length; i++) {
//     const bucketIndex = Math.floor((arr[i] - minElement) / range) - 1;
//     if (bucketIndex >= 0) temp[bucketIndex].push(arr[i]);
//     else temp[bucketIndex + 1].push(arr[i]);
//   }

//   // Sort the buckets individually
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i].length !== 0) {
//       temp[i].sort((a, b) => a - b);
//     }
//   }

//   // Gather elements from all the buckets to get the sorted array
//   const result = [];
//   let k = 0;
//   for (const lst of temp) {
//     if (lst.length !== 0) {
//       for (const i of lst) {
//         result[k] = i;
//         k = k + 1;
//       }
//     }
//   }

//   return result;
// }

// // Algoritmo BubbleSort
// function bubbleSort(arr) {
//   console.log("Bubble Sort. Original Array: ", arr);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         swap(arr, i, j);
//       }
//     }
//   }

//   console.log("Bubble Sort. Result Array: ", arr);
//   return arr;
// }

// function selectionSort(arr) {
//   console.log("Selection Sort. Original Array: ", arr);
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     swap(arr, i, minIndex);
//   }

//   console.log("Selection Sort. Result Array: ", arr);
//   return arr;
// }

// function insertionSort(arr) {
//   console.log("Insertion Sort. Original Array: ", arr);
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;

//     while (j > 0 && arr[j] < arr[j - 1]) {
//       swap(arr, j, j - 1);
//       j--;
//     }
//   }
//   console.log("Insertion Sort. Result Array: ", arr);
//   return arr;
// }

// // Função para gerar um array aleatório de tamanho n
// function generateRandomArray(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(Math.floor(Math.random() * n)); // Números aleatórios entre 0 e 1
//   }
//   return arr;
// }

// // Função para medir o tempo de execução de um algoritmo de ordenação
// function measureTime(sortFunction, arr) {
//   const startTime = performance.now();
//   sortFunction(arr);
//   const endTime = performance.now();
//   return endTime - startTime;
// }

// // Comparando o desempenho dos algoritmos
// const listSizes = [10, 100, 1000, 10000];
// const heapSortNotInPlaceTimes = [];
// const heapSortInPlaceTimes = [];
// const bucketSortTimes = [];
// const countingSortTimes = [];
// const bubbleSortTimes = [];
// const selectionSortTimes = [];
// const insertionSortTimes = [];

// for (let size of listSizes) {
//   const arr = generateRandomArray(size);

//   // Medir o tempo de execução para cada algoritmo
//   const heapSortNotInPlaceTime = measureTime(heapSortNotInPlace, [...arr]);
//   console.log(
//     `HeapSort not in place - Size: ${size}, Time: ${heapSortNotInPlaceTime.toFixed(
//       4
//     )}ms`
//   );
//   heapSortNotInPlaceTimes.push(heapSortNotInPlaceTime);

//   const heapSortInPlaceTime = measureTime(heapSortInPlace, [...arr]);
//   console.log(
//     `HeapSort in place - Size: ${size}, Time: ${heapSortInPlaceTime.toFixed(
//       4
//     )}ms`
//   );
//   heapSortInPlaceTimes.push(heapSortInPlaceTime);

//   const bucketSortTime = measureTime(bucketSort, [...arr]);
//   console.log(
//     `BucketSort - Size: ${size}, Time: ${bucketSortTime.toFixed(4)}ms`
//   );
//   bucketSortTimes.push(bucketSortTime);

//   const countingSortTime = measureTime(countingSort, [...arr]);
//   console.log(
//     `CountingSort - Size: ${size}, Time: ${countingSortTime.toFixed(4)}ms`
//   );
//   countingSortTimes.push(countingSortTime);

//   console.log("------");

//   const bubbleSortTime = measureTime(bubbleSort, [...arr]);
//   console.log(
//     `BubbleSort - Size: ${size}, Time: ${bubbleSortTime.toFixed(4)}ms`
//   );
//   bubbleSortTimes.push(bubbleSortTime);

//   const insertionSortTime = measureTime(insertionSort, [...arr]);
//   console.log(
//     `InsertionSort - Size: ${size}, Time: ${insertionSortTime.toFixed(4)}ms`
//   );
//   insertionSortTimes.push(insertionSortTime);

//   const selectionSortTime = measureTime(selectionSort, [...arr]);
//   console.log(
//     `SelectionSort - Size: ${size}, Time: ${selectionSortTime.toFixed(4)}ms`
//   );
//   selectionSortTimes.push(selectionSortTime);
// }

// // Desenhar o gráfico
// const ctx = document.getElementById("myChart").getContext("2d");
// const myChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: listSizes,
//     datasets: [
//       {
//         label: "HeapSort Not In Place",
//         data: heapSortNotInPlaceTimes,
//         borderColor: "red",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "HeapSort In Place",
//         data: heapSortInPlaceTimes,
//         borderColor: "blue",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "BucketSort",
//         data: bucketSortTimes,
//         borderColor: "green",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "CountingSort",
//         data: countingSortTimes,
//         borderColor: "orange",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "BubbleSort",
//         data: bubbleSortTimes,
//         borderColor: "rgb(24, 154, 255)",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "SelectionSort",
//         data: selectionSortTimes,
//         borderColor: "rgb(0, 96, 132)",
//         borderWidth: 1,
//         fill: false,
//       },
//       {
//         label: "InsertionSort",
//         data: insertionSortTimes,
//         borderColor: "rgb(72, 72, 12)",
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
