function useTraverseTree() {

    function insertNode(root, targetId, nodeName, isFolder) {
        const queue = [root];

        while(queue.length > 0) {
            const node = queue.shift();

            if(node.id === targetId && node.isFolder) {
                const newNode = {
                    id: Date.now().toString(),
                    name: nodeName,
                    isFolder: isFolder,
                    items: [],
                };

                node.items.unshift(newNode);
                return root;
            }

            if(node.isFolder && node.items.length > 0) {
                for(let adjNode of node.items) {
                    queue.push(adjNode);
                }
            }
        }
    }

    function deleteNode(root, targetId) {
        if (root.id === targetId) {
            return root;
        }

        const queue = [{node: root, parent: null}];

        while(queue.length > 0) {
            const {node, parent} = queue.shift();

            if(node.id === targetId) {
                if(parent) {
                    parent.items = parent.items.filter((it) => it.id !== targetId);
                    return root;
                }
            }

            if(node.isFolder && node.items.length > 0) {
                for(let adjNode of node.items) {
                    queue.push({node: adjNode, parent: node});
                }
            }
        }

        return root;
    }

    return [deleteNode, insertNode];
}

export default useTraverseTree;

