var Queue = function(){
  var someInstance = {};


  // Use an object with numeric keys to store values
  var size = 0;
  var first = 0;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
     storage[size] = value;
     size++;
  };

  someInstance.dequeue = function(){
    var result = storage[first];
    delete storage[first];
    for (var k in storage){
      console.log("I'm a key in the queue:" + k);
    }
    first++;
    return result;
  };

  someInstance.size = function(){

    if ((size - first) >=0){
      return size - first;
    }
    else{
      return 0;
    }
  };
  return someInstance;
};