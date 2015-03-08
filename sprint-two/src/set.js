var Set = function(){
  var set = Object.create(setPrototype);
  // which storage mechanism would be best to use in this case? array...
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	//take a string value/item and add it to the set
	this._storage[item] = item;

};

setPrototype.contains = function(item){
	return (this._storage[item] === item)
};

setPrototype.remove = function(item){
	// check the storage array for item
		// if item exists then remove/set to null bc it is an array
	delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 

