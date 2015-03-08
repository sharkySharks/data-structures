var BinarySearchTree = function(value){
	var newTree = Object.create(binaryMethods);

	newTree.value = value;
	newTree.left = null;
	newTree.right = null;

	return newTree;

};

var binaryMethods = {};

binaryMethods.insert = function(value){
	
	//add new tree to current tree based on value

	//call insert recursively when left or right is not null,
	// binaryMethods.insert(this.left) or on (this.right)
	//if null then assign the new node to the appropriate left or right property    

	//value to be the child tree on the recursion
	// value to be the # value on the first iteration
	
	var nextTree = BinarySearchTree(value);
	var currentTree = this;

	var inserting = function (tree){
		if (tree.value < nextTree.value){
			if (tree.right){
				inserting(tree.right);
			} else {
				tree.right = nextTree;
			}
		} else{
			if (tree.left){
				inserting(tree.left); 
			} else {
				tree.left = nextTree;
			}
		}
	}
	inserting(currentTree);
}

binaryMethods.contains = function(target){
	var currentTree = this;
	var found = false;

	var containing = function(tree){
		if (tree.value === target){
			found = true;
			return
		} else {
			if (tree.value < target){
				if (tree.right){
					containing(tree.right);
				}
			} else {
				if (tree.left){
					containing(tree.left);
				}
			}
			return found
		}
	}
	containing(currentTree);
	return found;
}

binaryMethods.depthFirstLog = function(callback){
	var currentTree = this;

	var calling = function(tree){
		callback(tree.value);

		if (tree.left){
			calling(tree.left);
		}
		if (tree.right){
			calling(tree.right);
		}
	}
	calling(currentTree);
}



/*
 * Complexity: What is the time complexity of the above functions? 0(log(n)) logarithmic time
 */
