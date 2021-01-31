// Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.
//
// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
//
// OJ's undirected graph serialization:
//   Nodes are labeled uniquely.
//   We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
//
// As an example, consider the serialized graph `{0,1,2#1,2#2,2}`.
//
// The graph has a total of three nodes, and therefore contains three parts as separated by #.
//
// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
// Second node is labeled as 1. Connect node 1 to node 2.
// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
// Visually, the graph looks like the following:
//
//      1
//     / \
//    /   \
//   0 --- 2
//        / \
//        \_/


const cloneGraph = (graph) => {
  return clone(graph, {});
};

const clone = (node, map) => {
  if (!node) return null;
  if (map[node.label]) return map[node.label];

  const cloneNode = new UndirectedGraphNode(node.label);

  map[node.label] = cloneNode;

  for (let i = 0; i < node.neighbors.length; i++) {
    cloneNode.neighbors.push(clone(node.neighbors[i], map));
  }

  return cloneNode;
};

// Big O: O(n)
