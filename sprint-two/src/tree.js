var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var extend = function (obj1, obj2){
	for (var key in obj2){
		obj1[key] = obj2[key]
	}
};


var treeMethods = {};

treeMethods.addChild = function(value){
	// add children to the tree 
	// adding new child to children array
	var newTree = Tree(value);
	this.children.push(newTree);
};


treeMethods.contains = function(target){
	//need to iterate over all nodes and children nodes to check if target is equal to the node value
	//all nodes are in its particular children array -- this.children
	// first need to check current node, then

	//looking for the value of the target in the current node first, then iterate over the children

	var found = false;

	var innerContains = function (node) {
		if (node.value === target) {
			found = true
			return;
		} else {
			for (var i = 0; i < node.children.length; i++) {
				// if node.children.length is 0 then it will skip over it 
				// not an infinite loop bc once it gets to the bottom of the tree then 
				//it does not have any other values to check
				var child = node.children[i];
				innerContains(child);
			}
		}
	}
	innerContains(this);

	return found;	
};


/*
 * Complexity: What is the time complexity of the above functions? linear 0(n) bc you have to visit each node
 */
