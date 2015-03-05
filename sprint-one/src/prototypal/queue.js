var Queue = function() {
	var newQ = Object.create(queueMethods);
	newQ.qSize = 0;
	newQ.first = 0;
	return newQ;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	var currentvalue = this.qSize;
	this[currentvalue] = value;
	this.qSize++;
};

queueMethods.dequeue = function() {
	var result = this[this.first];
	delete this[result];
	this.first++;
	return result;
};

 queueMethods.size = function() {
 	if ((this.qSize - this.first) >= 0){
 		return this.qSize - this.first;
 	}
 	else {
 		return 0;
 	}
};




