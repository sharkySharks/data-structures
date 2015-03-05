var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = { stackSize : 0 };
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function (to, from) {
	for (var key in from){
		to[key] = from[key];
	}
};

stackMethods = {};

stackMethods.push = function (value){
	var currentSize = this.stackSize;
	this[currentSize] = value;
	this.stackSize = this.stackSize + 1;
};

stackMethods.pop = function () {
	this.stackSize && this.stackSize--;
	var currentSize = this.stackSize;
	result = this[currentSize]; 
	delete this[currentSize];
	return result;

};

stackMethods.size = function () {
	return this.stackSize;
}
