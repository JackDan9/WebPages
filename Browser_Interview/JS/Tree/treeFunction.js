function transformListToTree(list) {
  var map = {},
    node,
    roots = [],
    i;
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i;
    list[i].children = [];
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.pid !== 0) {
      list[map[node.pid]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

var list = [
  { id: 1, pid: 0, name: 'one' },
  { id: 2, pid: 1, name: 'two' },
  { id: 3, pid: 1, name: 'three' },
  { id: 4, pid: 2, name: 'four' },
];
var tree = transformListToTree(list);
console.log(tree);