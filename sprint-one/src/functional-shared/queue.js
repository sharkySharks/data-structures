var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = { qSize : 0, fSize: 0};

  extend(newQueue, qMethods);

  return newQueue;

};

var extend = function(to, from){
	for (var key in from){
		to[key] = from[key];
	}
};

var qMethods = {};

qMethods.enqueue = function(value){
	currentValue = this.qSize;
	//add value to the end of the queue
	this[currentValue]= value;
	//increase size
	this.qSize++;
}

qMethods.dequeue = function(){
	currentValue = this.fSize;
	var result = this[currentValue];
	delete this[currentValue];
	this.fSize++;
	return result;
}

qMethods.size = function(){
	if ((this.qSize - this.fSize) >=0){
      return this.qSize - this.fSize;
    }
    else{
      return 0;
    }
}


