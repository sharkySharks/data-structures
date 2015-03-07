var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.tail === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      // we are redirecting both the tail pointer and the .next value of the tail.
      // first need to change the current tail.next value to be the newNode, then point the tail towards the newNode.
      list.tail.next = newNode;
      list.tail = newNode;
    }
    return newNode
  };


  list.removeHead = function(){
    var newHead = list.head;
    list.head = newHead.next;
    return newHead.value;
  };

  list.contains = function(target){
    // need to check the linked list for the target
    // do this by iterating over? checking all values somehow... while loop
    // if it is found in the linked list, then return true, else return false
    var currentNode = list.head;
    // starting with list.head to run through the linked list
    while (currentNode) {
      //if target is the current value then return true
      if (currentNode.value === target){
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? Constant time 0(1) since you do not have to visit each node, can access nodes within a few steps
 */
