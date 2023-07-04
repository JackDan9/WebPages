class TreeNode {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.children =[];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

class Tree {
  constructor(data) {
    const rootNode = new TreeNode({ id: 'root', name: '根节点' });
    
  }

  addNode() {

  }

  removeNode() {

  }
}