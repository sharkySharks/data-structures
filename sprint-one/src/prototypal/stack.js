var Stack = function() {
	var newStack = Object.create(stackMethods);
	newStack.stackSize = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
	this[this.stackSize] = value
	this.stackSize++

}

stackMethods.pop = function(){
	this.stackSize && this.stackSize--
	result = this[this.stackSize]
	delete this[this.stackSize]
	return result
}

stackMethods.size = function(){
	return this.stackSize
}

