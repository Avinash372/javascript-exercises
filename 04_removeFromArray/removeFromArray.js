const removeFromArray = function(array, ...rm) {
    let input = array;
    let rmArray = [...rm];
    
    for(let i = 0; i<input.length; i++){
      let result = input.filter(function(n) { return rmArray.indexOf(n) == -1;});
    return result;
    }
  };

// Do not edit below this line
module.exports = removeFromArray;
