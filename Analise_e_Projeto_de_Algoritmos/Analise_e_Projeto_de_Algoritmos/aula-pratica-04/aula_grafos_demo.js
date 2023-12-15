class Graph {
    // Construtor da classe Graph, inicializando as propriedades vertices e adjacencyList.
    constructor() {
        this.vertices = [];
        this.adjacencyList = {};
    }

    // Método para adicionar um vértice ao grafo.
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjacencyList[vertex] = {};
    }

    // Método para adicionar uma aresta entre dois vértices com um peso especificado.
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1][vertex2] = weight;
    }

    // Método para alterar o peso de uma aresta existente.
    changeWeight(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1][vertex2] = weight;
    }

    // Função auxiliar que retorna o vértice não visitado com a menor distância.
    vertexWithMinDistance(distances, visited) {
        let minDistance = Infinity, minVertex = null;

        for (let vertex in distances) {
            let distance = distances[vertex];
            if (distance < minDistance && !visited.has(vertex)) {
                minDistance = distance;
                minVertex = vertex;
            }
        }
        return minVertex;
    }

    // Algoritmo de Dijkstra para encontrar os caminhos mais curtos a partir de um vértice de origem.
    dijkstra(source) {
        let distances = {}, parents = {}, visited = new Set();

        // Inicializa as distâncias, pais e conjunto de visitados.
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === source)
                distances[source] = 0;
            else
                distances[this.vertices[i]] = Infinity;

            parents[this.vertices[i]] = null;
        }

        // Encontra o vértice com a menor distância não visitada.
        let currVertex = this.vertexWithMinDistance(distances, visited);

        // Loop principal do algoritmo.
        while (currVertex !== null) {
            console.log("----");
            let distance = distances[currVertex],
                neighbors = this.adjacencyList[currVertex];

            console.log("currVertex:"+currVertex);
            console.log("distance:"+distance);
            console.log("neighbors:");
            console.dir(neighbors);

            // Atualiza as distâncias e pais para os vizinhos do vértice atual.
            for (let neighbor in neighbors) {
              console.log("-");
                console.log("neighbor:"+neighbor);
                let newDistance = distance + neighbors[neighbor];
                console.log("newDistance:"+newDistance);
                console.log("distances[neighbor]:"+distances[neighbor]);

                if (distances[neighbor] > newDistance) {
                    distances[neighbor] = newDistance;
                    parents[neighbor] = currVertex;

                    console.log("New Distance!");
                    //console.log("parents[neighbor]:"+currVertex);
                }
            }

            // Marca o vértice atual como visitado.
            visited.add(currVertex);

            console.log("--");

            console.log("visited:");
            console.dir(visited);

            console.log("distances:");
            console.dir(distances);
            // Encontra o próximo vértice com a menor distância não visitada.
            currVertex = this.vertexWithMinDistance(distances, visited);
        }

        // Imprime os pais e distâncias finais após a execução do algoritmo.
        console.log("parents:")
        console.log(parents);
        //console.log(distances);
    }
}

// Cria uma instância da classe Graph.
let g = new Graph();

// Adiciona vértices ao grafo.
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

// Adiciona arestas ao grafo.
g.addEdge('A', 'B', 3);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'D', 2);
g.addEdge('C', 'D', 6);

// g.addEdge('D', 'C', 1);
// g.addEdge('A', 'D', 4);

// Executa o algoritmo de Dijkstra, com 'A' como vértice de origem.
g.dijkstra('A');

// Deve imprimir:
// { A: null, B: 'A', C: 'A', D: 'B' }
// { A: 0, B: 3, C: 2, D: 5 }
