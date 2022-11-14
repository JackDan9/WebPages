// c
// ├── a
// ├── b
// │   └── c
// └── d
//     ├── a
//     └── b
//         ├── c
//         │   └── e
//         └── d
//             └── c
//                 ├── e
//                 └── f


let treeData = [{
    key: 'c',
    children: [{
        key: 'a',
        children: []
    }, {
        key: 'b',
        children: [{
            key: 'c',
            children: []
        }]
    }, {
        key: 'd',
        children: [{
            key: 'a',
            children: []
        }, {
            key: 'b',
            children: [{
                key: 'c',
                children: [{
                    key: 'e',
                    children: []
                }]
            }, {
                key: 'd',
                children: [{
                    key: 'c',
                    children: [{
                        key: 'e',
                        children: []
                    }, {
                        key: 'f',
                        children: []
                    }]
                }]
            }]
        }]
    }]
}]

function handleTreeData(root, str) {
    let path = [];
    let result = [];

    path.push(root.key);

    function findPath(result, node, path, str) {
        // if (str === node.key) {
        //     result.push(path);
        //     return;
        // }

        result.push(path);

        if (node.children && node.children.length === 0) {
            // result.push(path);
            return;
        }

        for (let i = 0; i < node.children.length; i++) {
            let child = node.children[i];
            let cPath = [];
            cPath = cPath.concat(path);
            cPath.push(child.key);
            findPath(result, child, cPath, str);
        }
    }

    findPath(result, root, path, str);
    return result;
}


console.log(handleTreeData(treeData[0], 'c'));


