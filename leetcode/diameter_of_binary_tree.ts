
function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  dfs(root);
  return maxDiameter;
}
