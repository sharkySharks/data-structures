

var Graph = function(){
	this.nodes = {};

};

Graph.prototype.addNode = function(node){
	if (node){
		this.nodes[node] = this.nodes[node] || {edges: []}
	}
};

Graph.prototype.contains = function(node){
	//need to check to see if the node is contained in this.nodes
	if (this.nodes.hasOwnProperty(node)){
		return true;
	} else { return false; }
};

Graph.prototype.removeNode = function(node){
	//delete node from this.nodes
	delete this.nodes[node]

};

Graph.prototype.hasEdge = function(fromNode, toNode){
	//checking to see if two nodes are connected
	//need to check both edges' arrays for edge connection
	var nodes = this.nodes;
	var fromArray = nodes[fromNode].edges;
	var toArray = nodes[toNode].edges;

	//check within fromArray if toNode exists
	for (var i = 0; i < fromArray.length; i++){
		if (fromArray[i] === toNode) {
			return true;
		} else { return false;}
	}

};

Graph.prototype.addEdge = function(fromNode, toNode){
	var nodes = this.nodes;
	if (nodes.hasOwnProperty(fromNode) && nodes.hasOwnProperty(toNode)) {
		//push each other's nodes to each other's edge property array
		//need to get each other's correct property connection
		nodes[fromNode].edges.push(toNode);
		nodes[toNode].edges.push(fromNode);
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	// need to remove connection between the two nodes
	var nodes = this.nodes;
	var fromArray = nodes[fromNode].edges;
	var toArray = nodes[toNode].edges;

	//check within fromArray if toNode exists
	for (var i = 0; i < toArray.length; i++){
		if (toArray[i] === fromNode) {
			toArray[i] = null
		}
	}
	for (var i = 0; i < fromArray.length; i++){
		if (fromArray[i] === toNode) {
			fromArray[i] = null
		}
	}
};

Graph.prototype.forEachNode = function(cb){
	// traverse through the graph
	// call a function on each node
	var nodes = this.nodes;
	for (var key in nodes){
		cb(key);
	}

};


var newGraph = new Graph();



/*
 * Complexity: What is the time complexity of the above functions? 0(1)
 */



