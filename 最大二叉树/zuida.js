var constructMaximumBinaryTree = function(nums) {
  if(nums.length==0)
    return null
  var big=Math.max(...nums)
  var root=new TreeNode(big)
  root.left=constructMaximumBinaryTree(nums.slice(0,nums.indexOf(big)))
  root.right=constructMaximumBinaryTree(nums.slice(nums.indexOf(big)+1))
  return root
};