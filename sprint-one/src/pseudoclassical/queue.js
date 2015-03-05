var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.qSize = 0
  this.qFirst = 0
}

Queue.prototype.enqueue = function(value){
	this[this.qSize] = value
	this.qSize++

}
Queue.prototype.dequeue = function(){
	result = this[this.qFirst]
	delete this[this.qFirst]
	this.qFirst++
	return result

}
Queue.prototype.size = function(){
	if ((this.qSize - this.qFirst) >= 0){
		return this.qSize - this.qFirst
	}
	else{
		return 0
	}
}
var newQueue = new Queue()

