var Set = function(){
  var set = Object.create(setPrototype);
  // which storage mechanism would be best to use in this case? array...
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	//take a string value/item and add it to the set
	this._storage.push(item);

};

setPrototype.contains = function(item){
	for (var i = 0; i < this._storage.length; i++){
		if (this._storage[i] === item){
			return true;
		} 
	} return false
};

setPrototype.remove = function(item){
	// check the storage array for item
		// if item exists then remove/set to null bc it is an array
	for (var i = 0; i < this._storage.length; i++){
		if (this._storage[i] === item){
			this._storage[i] = null;
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 

