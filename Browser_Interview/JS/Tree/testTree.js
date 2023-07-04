

class TreeNode {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.children = [];
  }
  addChild(child) {
    this.children.push(child);
  }
}

class Tree {
  constructor(data) {
    const rootNode = new TreeNode({ id: 0, name: "root" });
    this.root = rootNode;
    this.nodes = { 0: rootNode };
    for (let nodeData of data) {
      const node = new TreeNode(nodeData);
      this.nodes[nodeData.id] = node;
      if (nodeData.pid === 0) {
        rootNode.addChild(node);
      } else {
        const parent = this.nodes[nodeData.pid];
        parent.addChild(node);
      }
    } 
  }
  addNode(data, parentId) {
    const newNode = new TreeNode(data);
    this.nodes[newNode.id] = newNode;
    const parentNode = this.nodes[parentId];
    parentNode.addChild(newNode);
  }
  removeNode(nodeId) {
    const node = this.nodes[nodeId];
    const parentNode = this.nodes[node.pid];
    const idx = parentNode.children.indexOf(node);
    if (idx !== -1) {
      parentNode.children.splice(idx, 1);
      delete this.nodes[nodeId];
    }
  }
}


const data = [
  { id: 1, pid: 0, name: "one" },
  { id: 2, pid: 1, name: "two" },
  { id: 3, pid: 1, name: "three" },
  { id: 4, pid: 2, name: "four" }
];

const tree = new Tree(data);


tree.addNode({ id: 5, pid: 1, name: "five" }, 1);

tree.removeNode(4);

// 以下转换
const deleteIds = []
list.forEach((i) => {
  i.children = []
  list.forEach((item) => {
    // 判断是否有父级（有：将其push到父级的children里，且将该id推进要删除的ids里）
    if (item.pid === i.id) {
      i.children.push(item)
      deleteIds.push(item.id)
    }
  })
  // 如果children为空，则删除该children
  if (i.children.length === 0) {
    delete i.children
  }
})
// 过滤在deleteIds的id
const result = list.filter(i => !deleteIds.includes(i.id))
console.log(list, result)


