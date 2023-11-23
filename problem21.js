// Write a program that finds the first common ancestor of two nodes in a binary tree. A common ancestor is a node that is an ancestor of both nodes and is as far up in the tree as possible.

function findCommonAncestor(root, node1, node2) {
    if (!root) {
      return null;
    }
  
    if (root === node1 || root === node2) {
      return root;
    }
  
    const left = findCommonAncestor(root.left, node1, node2);
    const right = findCommonAncestor(root.right, node1, node2);
  
    if (left && right) {
      return root;
    }
  
    return left || right;
  }
  

  const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right = new BinaryTree(3);

const node1 = tree.left.left;
const node2 = tree.right;

const commonAncestor = findCommonAncestor(tree, node1, node2);
console.log(commonAncestor.data); // Output: 1
