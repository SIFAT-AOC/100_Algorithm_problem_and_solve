// Create a function that takes a tree as its argument and returns the depth of the tree.

function getDepthOfTree(tree) {
    if (!tree) {
      return 0;
    }
  
    const leftDepth = getDepthOfTree(tree.left);
    const rightDepth = getDepthOfTree(tree.right);
  
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // Example usage
  const tree = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
      },
      right: {
        value: 5,
      },
    },
    right: {
      value: 3,
    },
  };
  
  const depth = getDepthOfTree(tree);
  console.log(depth);
  