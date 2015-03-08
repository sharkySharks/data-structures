var HashTable = function(){


  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // use limited array to store all inserted values
  // i is going to be the index of the array and k,v will be stored there
  // need to store the key value pair at index i of the array
  var bucket = this._storage.get(i);

  var value = [k,v];

  if (!bucket){
  	this._storage.set(i, [value]);
  	//this._storage[i] = bucket, same as above^
  } else {
  	bucket.push(value);
  	this._storage.set(i, bucket);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

// 'get' retrieves a bucket from the storage array
  var bucket = this._storage.get(i);

// need to iterate over the bucket to retrieve the key value pair
  for (var j = 0; j < bucket.length; j++){
	if (bucket[j][0] === k){
		return bucket[j][1];
	}
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

// need to iterate over the bucket to retrieve the key value pair and remove

  for (var j = 0; j < bucket.length; j++){
	if (bucket[j][0] === k){
		bucket[j][1] = null;
		break;
	}
  }

};

var newHash = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions? 0(1) constant time
 */
